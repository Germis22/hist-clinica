import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../FirebaseConfig";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw Error("Ther is no auth provider");
  return context;
};

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
      
        const getPacientes = async () => {
            const data = await getDocs(pacientesCollectionRef);
            setPacientes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPacientes();
    }, [])
    

    return (
        <authContext.Provider value={{ signUp, login, user, logout, loading, pacientes }}>
        {children}
        </authContext.Provider>
    );
}
