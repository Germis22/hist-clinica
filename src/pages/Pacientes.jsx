import { useAuth } from '../context/authContext'
import EditPaciente from '../components/EditPaciente'
import InfoPaciente from '../components/InfoPaciente'
import AddSintoma from '../components/AddSintoma'
import DeletePaciente from '../components/DeletePaciente'

const Pacientes = () => {

  const { pacientes} = useAuth()


  return (
    <div className='flex justify-center items-center h-full my-10'>
      <div
        className="overflow-x-auto lg:w-5/6 sm:w-full bg-base-200 rounded-lg shadow-lg"
      >
        <table className="table relative w-full">
          <thead className="sticky top-0">
            <tr>
              <th>Nombre</th>
              <th >Edad</th>
              <th>Sexo</th>
              <th>Fec. Nacimiento</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
          {pacientes.map((paciente, i) => {
            return (
              <tr key={i}>
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

                  <AddSintoma patient={paciente}/>

                  <br />

                  <EditPaciente patient={paciente} />

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