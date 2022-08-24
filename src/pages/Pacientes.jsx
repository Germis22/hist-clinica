import { useAuth } from '../context/authContext'
import EditPaciente from '../components/EditPaciente'
import InfoPaciente from '../components/InfoPaciente'
import AddSintoma from '../components/AddSintoma'
import DeletePaciente from '../components/DeletePaciente'

const Pacientes = () => {

  const { pacientes, deletePaciente } = useAuth()

  return (
    <div className='flex justify-center items-center h-full my-10'>
      <div
        className="overflow-x-auto lg:w-5/6 sm:w-full bg-base-200 rounded-lg shadow-lg"
      >
        <table className="table w-full">
          <thead>
            <tr>
              <th >Nombre</th>
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
                    {paciente.nombre} {paciente.apellido}
                  </div>
                </th>

                <td>{paciente.edad}</td>
                <td>{paciente.sexo}</td>

                <td>{paciente.nacimiento}</td>

                <td>
                  <InfoPaciente paciente={paciente}/>                 

                  <AddSintoma/>

                  <br />

                  <EditPaciente />

                  <DeletePaciente paciente={paciente}/>

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