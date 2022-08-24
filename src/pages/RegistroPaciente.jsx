import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Registros = () => {

  const [paciente, setPaciente] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    nacimiento: "",
    direccion: "",
    telefono: 0,
    sintomas: ""
  });

  const [error, setError] = useState()

  const {addPaciente} = useAuth();

  const navigate = useNavigate();

  const handleChange = ({target: {id, value}}) => {
    setPaciente({ ...paciente, [id]: value });
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await addPaciente(
        paciente.nombre,
        paciente.apellido,
        paciente.edad,
        paciente.sexo,
        paciente.nacimiento,
        paciente.direccion,
        paciente.telefono,
        paciente.sintomas
      );
      navigate('/pacientes')
      refreshPage()
    } catch (error) {
      setError(error)
    }
    console.log(error);
  }

  return (
    <div className="flex justify-center items-center h-full my-10">
      <form
        onSubmit={handleSubmit}
        className="bg-base-200 py-10 px-5 lg:w-2/4 md:w-4/5 w-full mx-2 rounded-lg shadow-lg"
      >
        <p className=" text-2xl font-bold text-center mb-10">
          Registrar {""}
          <span className=" text-info font-bold">Nuevo Paciente</span>
        </p>

        <div className="lg:w-4/5 md:w-full m-auto">
          <div className="mb-5">
            <label htmlFor="nombre" className="block font-bold uppercase">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre del Paciente"
              onChange={handleChange}
              className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="apellido" className="block font-bold uppercase">
              Apellido
            </label>
            <input
              id="apellido"
              type="text"
              placeholder="Apellido del Paciente"
              onChange={handleChange}
              className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="edad" className="block font-bold uppercase">
              Edad
            </label>
            <input
              id="edad"
              type="text"
              placeholder="Edad"
              onChange={handleChange}
              className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sexo" className="block font-bold uppercase">
              Sexo
            </label>
            <select
              id="sexo"
              defaultValue=""
              onChange={handleChange}
              className="border-2 w-full p-2 mt-2 text-black"
            >
              <option value="" disabled>
                Seleccione el sexo
              </option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="nacimiento" className="block font-bold uppercase">
              Fecha de Nacimiento
            </label>
            <input
              id="nacimiento"
              type="date"
              max={new Date().toISOString().split("T")[0]}
              placeholder="Nombre del Paciente"
              onChange={handleChange}
              className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="direccion" className="block font-bold uppercase">
              Dirección
            </label>
            <input
              id="direccion"
              type="text"
              placeholder="Dirección del domicilio"
              onChange={handleChange}
              className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="telefono" className="block font-bold uppercase">
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              placeholder="Ex. 76543210"
              onChange={handleChange}
              className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block font-bold uppercase">
              Síntomas
            </label>
            <textarea
              id="sintomas"
              type="text"
              placeholder="Sintomas del Paciente"
              onChange={handleChange}
              className="border-2 w-full p-2 mt-2 h-56 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>

        <div className=" lg:w-2/5 md:w-full m-auto">
          <input
            type="submit"
            value={"Registrar Paciente"}
            className=" bg-info w-full p-3 mt-2 text-white uppercase font-bold hover:bg-primary-focus cursor-pointer transition-all rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Registros;
