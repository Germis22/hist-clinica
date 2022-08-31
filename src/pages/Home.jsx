import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router";

const Home = () => {
  const { user, loading } = useAuth();

  const navigate = useNavigate();

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div
        className="hero min-h-screen fixed"
        style={{backgroundImage: "url(src/assets/african-american-doctor-with-face-mask-examining-boy-s-throat-during-home-visit.jpg)"}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Bienvenido <span className="sm:text-4xl text-3xl">{user.email}</span></h1>
            <p className="mb-5">
              Administra tu consultorio de la mejor manera.<br/>
              Registra nuevos pacientes, edita sus datos, agrega síntomas y mucho más.
            </p>
            <button className="btn" onClick={()=> navigate('registros')}>comienza ya!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
