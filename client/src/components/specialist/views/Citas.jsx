import Search from "./appointment/Search";
import "tailwindcss/tailwind.css";

export default function Citas() {
  return (
    <div className="flex flex-wrap justify-right text-center pt-16 mt-16 pl-80">
      
      <Search />
      <div>
        <table className="table-fixed w-full text-center mt-8">
          <thead>
            <tr className="bg-green-200 mr-5">
              <th className="p-1 border text-center w-1">Especialidad</th>
              <th className="p-1 border text-center w-1">Fecha</th>
              <th className="p-1 border text-center w-1">Hora</th>
              <th className="p-1 border text-center w-1">Médico Tratante</th>
              <th className="p-1 border text-center w-1">Cuidad</th>
              <th className="p-1 border text-center w-1">check</th>              
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
