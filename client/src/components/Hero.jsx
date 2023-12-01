import { Badge } from 'flowbite-react';

function Hero() {
  return (
    <>
        <main>
            <div className="mt-20 py-24 px-6 text-center dark:bg-gray-900 ">
                <h1 className="text-black-600 mt-2 mb-14 p-8 text-5xl  tracking-tight md:text-5xl xl:text-5xl s:text-4xl">
                    Cuida tu salud y busca un <br />especialista 👩‍⚕️
                </h1>
                <input type="text" className="border-1 mr-5  p-3 inline-block rounded shadow-[0_4px_9px_-4px_#3b71ca]" />
                <a className="bg-purple-500 mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">
                    Buscar
                </a>

                <div className="flex flex-wrap gap-2 mt-20 items-center justify-center ">
                  <Badge size="sm" href="#" color="info">Cardiología</Badge>
                  <Badge size="sm" href="#" color="gray">Optometría</Badge>
                  <Badge size="sm" href="#"color="purple">Hortodoncia</Badge>
                  <Badge size="sm" href="#" color="failure">Psiquiatría</Badge>
                  <Badge size="sm" href="#" color="success">Pediatría</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-10 items-center justify-center ">
                  <Badge size="sm" href="#" color="success">Radiografía</Badge>
                  <Badge size="sm" href="#"color="warning">Urología</Badge>
                  <Badge size="sm" href="#" color="indigo">Ecografía</Badge>
                  <Badge size="sm" href="#" color="pink">Endoscopia</Badge>
                </div>
                
            </div>
        </main>
    </>
  )
}

export default Hero