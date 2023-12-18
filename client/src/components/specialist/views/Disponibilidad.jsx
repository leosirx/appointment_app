import { useState, useRef} from "react";
import  axios  from "axios";
import { useSelector } from 'react-redux';



function Disponibilidad() {
  const { userInfo, rawHeaders } = useSelector((state) => state.auth);
  console.log(userInfo);
  console.log(rawHeaders);
  console.log(useSelector((state) => state))

    // Estos son los estados para guardar las fechas y horas de inicio y fin
    const [horaInicio, setHoraInicio] = useState();
    const [horaFin, setHoraFin] = useState();
  
  // Este es un arreglo de objetos que representa los datos iniciales de la tabla
  const [rows, setRows] = useState([
    {
      dia: "Lunes",
      horaInicio: "13:00 pm",
      horaFin: "19:00 pm",
      id: 1,
      editMode: false, // Esta propiedad indica si la fila está en modo de edición o no
    },
    {
      dia: "Martes",
      horaInicio: "13:00 pm",
      horaFin: "18:00 pm",
      id: 2,
      editMode: false,
    },
    {
      dia: "Miércoles",
      horaInicio: "9:00 am",
      horaFin: "13:00 pm",
      id: 3,
      editMode: false,
    },
    {
      dia: "Jueves",
      horaInicio: "13:00 pm",
      horaFin: "16:00 pm",
      id: 4,
      editMode: false,
    },
    {
      dia: "Viernes",
      horaInicio: "13:00 pm",
      horaFin: "18:00 pm",
      id: 5,
      editMode: false,
    },
  ]);



  function parseDate(date) {
      const fecha = new Date(date);
      const hora = fecha.toLocaleString('es-AR', { hour: 'numeric', minute: 'numeric', hour12: true });
      return hora
    }

     // Esta es la variable que guarda la referencia al estado de los datos de la tabla
  const rowsRef = useRef(rows); // Aquí le asignas el valor inicial

  // Esta es la función que se ejecuta cuando se hace clic en el botón de editar de una fila
  const handleEdit = (row) => {
    // Aquí cambiamos el valor de editMode a true para la fila seleccionada
    setRows(
      rows.map((r) =>
        r.id === row.id ? { ...r, editMode: true } : { ...r, editMode: false }
      )
    );
    // Aquí asignamos los valores actuales de la fila a los estados horaInicio y horaFin
    setHoraInicio(row.horaInicio);
    setHoraFin(row.horaFin);
  };

  // Esta es la función que se ejecuta cuando se guarda el cambio de fecha y hora en la tabla
  const handleSave = (id) => {
    // Aquí actualizamos la fila de la tabla con los nuevos valores de horaInicio y horaFin
    console.log("Hora inicio",typeof horaInicio )
    console.log("Hora fin",typeof horaFin )
    setRows(
      rows.map((row) =>
        row.id === id

          ? { ...row, horaInicio: (horaInicio), horaFin: (horaFin), editMode: false }
          : row
      )
    );
  
  }
   // Aquí actualizamos la referencia con el nuevo valor del estado
   rowsRef.current = rows; // Aquí le asignas el valor actualizado
  
    
  // Esta es la función que se ejecuta cuando se hace clic en el botón de cancelar de una fila
  const handleCancel = (id) => {
    // Aquí cambiamos el valor de editMode a false para la fila seleccionada
    setRows(rows.map((row) => (row.id === id ? { ...row, editMode: false } : row)));
  };

  // Esta es la función que se ejecuta cuando se hace clic en el botón de eliminar de una fila
  const handleDelete = (id) => {
    // En este caso, solo vamos a eliminar la fila de la tabla
    setRows(rows.filter((row) => row.id !== id));
  };


   return (
    <div className="flex flex-wrap justify-right text-center pt-16 mt-16 pl-20">
    
      <div className="flex items-center justify-between">
     
        <div className="w-9/12 ml-20 py-2 px-40">
          <table className="table-fixed w-full text-center">
            <thead>
              <tr className="bg-green-200">
                <th className="p-1 border text-center w-1">Día</th>
                <th className="p-2 border text-center w-1">Hora de inicio</th>
                <th className="p-2 border text-center w-1">Hora de fin</th>
                <th className="p-2 border text-center w-1">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="even:bg-gray-100">
                  <td className="p-3 border">{row.dia}</td>
                
                  <td className="p-1 border">
                    {row.editMode ? (
                      <TimePicker
                        value={horaInicio}
                        onChange={setHoraInicio}
                      />
                    ) : (
                      row.horaInicio
                    )}
                  </td>
                  {/* Aquí mostramos el componente DateTimePicker o el valor de la hora de fin según el valor de editMode */}
                  <td className="p-1 border">
                    {row.editMode ? (
                      <TimePicker
                       value={horaFin} 
                       onChange={setHoraFin} />
                    ) : (
                      row.horaFin
                    )}
                  </td>
                  <td className="p-1 border">
                    {/* Aquí mostramos los botones de editar, guardar, cancelar y eliminar según el valor de editMode */}
                    {row.editMode ? (
                      <div className="flex space-x-2">
                        <button
                        className="text-color-black rounde bg-slate-300 p-1 h-10 rounde"
                          onClick={() => handleSave(row.id)}
                        >
                          Guardar
                        </button>
                        <button className="text-color-black bg-red-300 p-1 h-10 rounde"
                          onClick={() => handleCancel(row.id)}
                        >
                          Cancelar
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button className="text-color-black bg-slate-300 p-3 h-11 rounded"
                          onClick={() => handleEdit(row)}
                        >
                          Editar
                        </button>
                        <button className="text-color-black bg-red-300 p-3 h-11 rounded"
                          onClick={() => handleDelete(row.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
                    
}

export default Disponibilidad