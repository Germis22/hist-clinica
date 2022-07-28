import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState()

    const { signUp } = useAuth();

    const navigate = useNavigate();

    const handleChange = ({target: {id, value}}) => {
        setUser({...user, [id]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signUp(user.email, user.password)
            navigate('/')
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('El email ya está en uso!')
            } else if (error.code === 'auth/invalid-email') {
                setError('El email no es válido!')                
            } else if (error.code === 'auth/weak-password') {
                setError('La contraseña es muy débil!')
            } else if (error.code === 'auth/missing-email') {
                setError('Todos los campos son obligatorios!')
            } else {
                setError('Error desconocido!')
            }
        }
    }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-base-200 w-screen h-screen sm:w-auto sm:h-auto rounded-lg py-10 px-5 shadow-md"
      >
        <p className=" text-2xl font-bold text-center mb-10">
          Sign {""}
          <span className=" text-info font-bold">Up</span>
        </p>

        {error && (
          <div className="alert alert-warning flex justify-start p-3 mb-5 shadow-md rounded-lg font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <div className="mb-5">
          <label htmlFor="email" className="bloc font-bold uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@ejemplo.com"
            onChange={handleChange}
            className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="bloc font-bold uppercase">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
          />
        </div>

        <input
          value={"Registrarse"}
          type="submit"
          className=" bg-info w-full p-3 mt-2 text-white uppercase font-bold hover:bg-primary-focus cursor-pointer transition-all rounded-md"
        />
      </form>
    </div>
  );
};

export default SignUp;
