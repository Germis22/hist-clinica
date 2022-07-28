import React from 'react'
import { useAuth } from '../context/authContext'

const Pacientes = () => {

  const { pacientes } = useAuth()

  return (
    <div className='flex justify-center items-center h-screen'>
            <div
              className="overflow-x-auto lg:w-5/6 sm:w-full bg-base-200 rounded-lg shadow-lg"
              key={pacientes.id}
            >
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Sexo</th>
                    <th>Fec. Nacimiento</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>

                {pacientes.map((paciente) => {
                  return (

                  <tr>
                    <th>
                      <div className="font-bold">
                        {paciente.nombre} {paciente.Apellido}
                      </div>
                    </th>

                    <td>22</td>
                    <td>hombre</td>

                    <td>22/02/2020</td>

                    <td>
                      <button className="btn btn-square btn-sm m-2">
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
                      </button>
                      <button className="btn btn-square btn-sm">
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
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                      <br />
                      <button className="btn btn-square btn-sm mx-2">
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
                      </button>
                      <button className="btn btn-square btn-sm">
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
                      </button>
                    </td>
                  </tr>
                  );
                })}
                </tbody>

                <tfoot>
                  <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Sexo</th>
                    <th>Fec. Nacimiento</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
    </div>
  )
}

export default Pacientes