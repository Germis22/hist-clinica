import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, getDocs, addDoc, doc, deleteDoc, orderBy, query, updateDoc } from "firebase/firestore";
import { auth, db } from "../FirebaseConfig";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw Error("Ther is no auth provider");
  return context;
};

const refreshPage = () => {
  window.location.reload(false);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [pacientes, setPacientes] = useState([])

    const pacientesCollectionRef = collection(db, "pacientes");

    const signUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const addPaciente = async (nombre, apellido, edad, sexo, nacimiento, direccion, telefono, sintomas) => {
        await addDoc(
          pacientesCollectionRef,
          {
            nombre,
            apellido,
            edad,
            sexo,
            nacimiento,
            direccion,
            telefono,
            sintomas,
            timestamp: Date.now(),
          } 
        );
    }

    const updatePaciente = async (id, nombre, apellido, edad, sexo, nacimiento, direccion, telefono, sintomas) => {
      const pacienteDoc = doc(db, "pacientes", id);
      const newFields = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        sexo: sexo,
        nacimiento: nacimiento,
        direccion: direccion,
        telefono: telefono,
        sintomas: sintomas,
      };
      await updateDoc(pacienteDoc, newFields)
    }

    const addSintoma = async (id, sintomas) => {
      const pacienteDoc = doc(db, "pacientes", id);
      const newFields = {
        sintomas: sintomas,
      };
      await updateDoc(pacienteDoc, newFields)
    }

    const deletePaciente = async (id) => {
        const pacienteDoc = doc(db, "pacientes", id);
        await deleteDoc(pacienteDoc);
        refreshPage();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
      
        const que = query(pacientesCollectionRef, orderBy("apellido"))

        const getPacientes = async () => {
            const data = await getDocs(que);
            setPacientes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPacientes();
    }, [])
    

    return (
      <authContext.Provider
        value={{
          signUp,
          login,
          user,
          logout,
          loading,
          pacientes,
          addPaciente,
          deletePaciente,
          updatePaciente,
          addSintoma
        }}
      >
        {children}
      </authContext.Provider>
    );
}
