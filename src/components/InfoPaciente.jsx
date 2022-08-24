import React from 'react'
import FormInfoPaciente from './FormInfoPaciente';
import { useAuth } from '../context/authContext';

const InfoPaciente = (paciente) => {

  const pacienteId =paciente.paciente.id

  return (
    <>
      <label htmlFor={`${pacienteId}-info`} className="btn btn-square btn-sm m-2">
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </label>

      <input type="checkbox" id={`${pacienteId}-info`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <FormInfoPaciente 
            paciente = {paciente}
          />
          <div className="modal-action">
            <label htmlFor={`${pacienteId}-info`} className="btn uppercase">
              Salir
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPaciente