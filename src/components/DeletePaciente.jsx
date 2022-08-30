import { useAuth } from '../context/authContext'
import { useState } from 'react'

const DeletePaciente = (paciente) => {

  const { deletePaciente } = useAuth()
  const pacienteId = paciente.paciente.id

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <>
      <label htmlFor={`${pacienteId}-delete`} className="btn btn-square btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </label>

      <input type="checkbox" id={`${pacienteId}-delete`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Eliminar Paciente!
          </h3>
          <p className="py-4 flex flex-wrap">
            Está seguro que desea eliminar este paciente: <span className="font-bold sm:ml-1">{paciente.paciente.nombre} {paciente.paciente.apellido}</span> ?
          </p>

          <div className="flex sm:justify-end justify-center">

            <div className="modal-action mr-5">
              <label htmlFor={`${pacienteId}-delete`} className="btn" onClick={() => {deletePaciente(pacienteId)}}>
                Eliminar
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor={`${pacienteId}-delete`} className="btn">
                Cancelar
              </label>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default DeletePaciente