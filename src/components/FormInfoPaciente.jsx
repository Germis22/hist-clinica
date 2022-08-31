import React from 'react'
import { useAuth } from '../context/authContext'

const FormInfoPaciente = (paciente) => {

    const patient = paciente.paciente.paciente

    const date = new Date(patient.timestamp).toLocaleDateString()

  return (
    <div className="flex justify-center items-center h-full my-10">    
      <form
        className="w-full"
      >
        <p className=" text-2xl font-bold text-center mb-10">
          Información del{""}
          <span className=" text-info font-bold"> Paciente</span>
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
              value={patient.nombre}
              disabled
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
              value={patient.apellido}
              disabled
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
              value={patient.edad}
              disabled
              className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sexo" className="block font-bold uppercase">
              Sexo
            </label>
            <input
              id="sexo"
              type="text"
              placeholder="Sexo"
              value={patient.sexo}
              disabled
              className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="nacimiento" className="block font-bold uppercase">
              Fecha de Nacimiento
            </label>
            <input
              id="nacimiento"
              type="text"
              max={new Date().toISOString().split("T")[0]}
              disabled
              placeholder="Nombre del Paciente"
              value={patient.nacimiento}
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
              value={patient.direccion}
              disabled
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
              value={patient.telefono}
              disabled
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
              value={date + ": " +patient.sintomas}
              disabled
              className="border-2 w-full p-2 mt-2 h-56 text-black placeholder:text-gray-400 rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormInfoPaciente