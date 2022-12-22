import { useState } from "react";
import { useAuth } from "../context/authContext";

const AddSintoma = (patient) => {
  const pacienteId = patient.patient.id;
  const actualSintoma = patient.patient.sintomas;

  const [paciente, setPaciente] = useState({
    regSintoma: "",
    sintomas: "",
  });

  const date = new Date(paciente.regSintoma).toLocaleDateString("es-ES", {
    timeZone: "UTC",
  });

  const totalSintomas =
    actualSintoma + "\n\n" + date + ": " + paciente.sintomas;

  const [error, setError] = useState();

  const { addSintoma } = useAuth();

  const handleChange = ({ target: { id, value } }) => {
    setPaciente({ ...paciente, [id]: value });
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await addSintoma(pacienteId, totalSintomas);
      refreshPage();
    } catch (error) {
      setError(error);
    }
    console.log(error);
  };

  return (
    <>
      <label htmlFor={`${pacienteId}-add`} className="btn btn-square btn-sm">
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
      </label>

      <input
        type="checkbox"
        id={`${pacienteId}-add`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-center items-center h-full my-10">
            <form className="w-full">
              <p className=" text-2xl font-bold text-center mb-10 ">
                Nueva {""}
                <span className=" text-info font-bold">Consulta</span>
              </p>

              <div className="lg:w-4/5 md:w-full m-auto">
                <div className="mb-5">
                  <label
                    htmlFor="regSintoma"
                    className="block font-bold uppercase"
                  >
                    Fecha de Registro
                  </label>
                  <input
                    id="regSintoma"
                    type="date"
                    max={new Date().toISOString().split("T")[0]}
                    placeholder="Fecha de Registro"
                    onChange={handleChange}
                    className="border-2 w-full p-2 mt-2 text-black placeholder:text-gray-400 rounded-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="sintomas"
                    className="block font-bold uppercase"
                  >
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
            </form>
          </div>

          <div className="flex sm:justify-end justify-center">
            <div className="modal-action mr-5">
              <label
                htmlFor={`${pacienteId}-add`}
                className="btn"
                onClick={handleUpdate}
              >
                Guardar
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor={`${pacienteId}-add`} className="btn">
                Cancelar
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSintoma;
