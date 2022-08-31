import { useState } from 'react'
import { useAuth } from '../context/authContext';
import FormEditPaciente from './FormEditPaciente'

const EditPaciente = (patient) => {

  const pacienteId = patient.patient.id

  const [paciente, setPaciente] = useState({
    nombre: patient.patient.nombre,
    apellido: patient.patient.apellido,
    edad: patient.patient.edad,
    sexo: patient.patient.sexo,
    nacimiento: patient.patient.nacimiento,
    direccion: patient.patient.direccion,
    telefono: patient.patient.telefono,
    sintomas: patient.patient.sintomas
    });

    const [error, setError] = useState()

    const {updatePaciente} = useAuth();

    const handleChange = ({target: {id, value}}) => {
    setPaciente({ ...paciente, [id]: value });
    }

    const refreshPage = () => {
      window.location.reload(false);
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        setError('')
        try {
          await updatePaciente(
            pacienteId,
            paciente.nombre,
            paciente.apellido,
            paciente.edad,
            paciente.sexo,
            paciente.nacimiento,
            paciente.direccion,
            paciente.telefono,
            paciente.sintomas
          );
          refreshPage()
        } catch (error) {
          setError(error)
        }
        console.log(error);
      }

  return (
    <>
      <label
        htmlFor={`${pacienteId}-edit`}
        className="btn btn-square modal-button btn-sm mx-2"
      >
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </label>

      <input type="checkbox" id={`${pacienteId}-edit`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">

          {/* <FormEditPaciente /> */}
          {/* --------------------------------------------- */}
          <div className="flex justify-center items-center h-full my-10">    
            <form
              className="w-full"
            >
              <p className=" text-2xl font-bold text-center mb-10 flex justify-center flex-wrap">
                Editar Información {""}
                <span className=" text-info font-bold sm:ml-2">del Paciente</span>
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
                    value={paciente.nombre}
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
                    value={paciente.apellido}
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
                    value={paciente.edad}
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
                    defaultValue={paciente.sexo}
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
                    value={paciente.nacimiento}
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
                    value={paciente.direccion}
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
                    value={paciente.telefono}
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
                    value={paciente.sintomas}
                    onChange={handleChange}
                    className="border-2 w-full p-2 mt-2 h-56 text-black placeholder:text-gray-400 rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* --------------------------------------------- */}

          <div className="flex sm:justify-end justify-center">
            <div className="modal-action mr-5">
              <label htmlFor={`${pacienteId}-edit`} className="btn" onClick={handleUpdate}>
                Guardar
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor={`${pacienteId}-edit`} className="btn">
                Cancelar
              </label>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default EditPaciente