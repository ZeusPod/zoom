import React, { useEffect, useState } from "react";
import Modal from "../Components/Modal";
const date = new Date();

// Creamos array con los meses del año
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
// Creamos array con los días de la semana
const dias_semana = [
  "Domingo",
  "Lunes",
  "martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export default function HomePage() {
  const [dateTime, setDateTime] = useState({
    hour: date.getHours(),
    minutes: date.getMinutes().toString().padStart(2, 0),
    date: `${dias_semana[date.getDay()]}, ${date.getDate()} de ${
      meses[date.getMonth()]
    } de ${date.getUTCFullYear()}`,
  });
  const [modalMeeting, setModalMeeting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hour: date.getHours(),
        minutes: date.getMinutes().toString().padStart(2, 0),
        date: `${dias_semana[date.getDay()]}, ${date.getDate()} de ${
          meses[date.getMonth()]
        } de ${date.getUTCFullYear()}`,
      });
    }, 1000);
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-y-auto">
      {/* CONTENEDOR */}
      <div className="bg-[#FFFFFF] flex flex-1 items-center justify-center py-10">
        <div className="flex flex-1 items-center justify-center px-2 sm:px-6 lg:px-8 max-w-3xl sm:justify-between">
          {/* CONTENEDOR DE BOTONES */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-center pb-10">
                <button className=" rounded-3xl bg-[#F26D21] w-[85px] h-[85px] hover:bg-[#E46B29] transition duration-200 ease-in-out">
                  <i className="fa-solid fa-video-slash fa-2xl text-white"></i>
                </button>
                <span className="text-xs pt-2">Nueva reunión</span>
              </div>

              <div className="flex flex-col items-center w-32">
                <button
                  onClick={() => setModalMeeting(true)}
                  className=" rounded-3xl bg-[#0E71EB] w-[85px] h-[85px] hover:bg-[#1A6CDA] transition duration-200 ease-in-out"
                >
                  <i className="fa-solid fa-square-plus fa-2xl text-white"></i>
                </button>
                <span className="text-xs pt-2">Entrar</span>
              </div>

              <div className="flex flex-col items-center">
                <button className=" rounded-3xl bg-[#0E71EB] w-[85px] h-[85px] hover:bg-[#1A6CDA] transition duration-200 ease-in-out">
                  <i className="fa-solid fa-calendar fa-2xl text-white"></i>
                </button>
                <span className="text-xs pt-2">Agendar</span>
              </div>

              <div className="flex flex-col items-center">
                <button className=" rounded-3xl bg-[#0E71EB] w-[85px] h-[85px] hover:bg-[#1A6CDA] transition duration-200 ease-in-out">
                  <i className="fa-solid fa-arrow-up-from-bracket fa-2xl text-white"></i>
                </button>
                <span className="text-xs pt-2">Compartir pantalla</span>
              </div>
            </div>
          </div>

          {/* CONTENEDOR DE RELOJ Y REUNIONES */}
          <div className="hidden items-center sm:flex">
            <div className="flex flex-col rounded-xl bg-white w-[343px] h-[439px] border bordeer-[#DEDEE3] overflow-hidden">
              <div className="h-[145px] overflow-hidden relative flex items-center justify-center">
                <div>
                  <img
                    src="https://www.wallpapertip.com/wmimgs/13-134689_firewatch-background-4k-night.jpg"
                    alt="wallpaper"
                  ></img>
                </div>
                <div className="absolute flex flex-col items-center">
                  <span className="text-white text-4xl">{`${dateTime.hour}:${dateTime.minutes}`}</span>
                  <span className="text-white text-sm ">{dateTime.date}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center">
                <span>No hay reuniones próximas hoy</span>
              </div>
            </div>
          </div>
        </div>

        <Modal
          status={modalMeeting}
          changeStatus={setModalMeeting}
          showHeader={false}
        >
          <div className="flex flex-col">
            <h3 className=" font-bold text-2xl py-8">Entrar</h3>

            <div className="flex flex-col space-y-4">
              <input
                className="appearance-none rounded-xl px-3 py-2 border-2 border-[#BABACC] placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-[#0E71EB] sm:text-sm"
                type="text"
                placeholder="ID de reunión"
              ></input>
              <input
                className="appearance-none rounded-xl px-3 py-2 border-2 border-[#BABACC] placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-[#0E71EB] sm:text-sm"
                type="text"
                placeholder="Introducir el nombre"
              ></input>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <input
                  id="audio"
                  name="audio"
                  type="checkbox"
                  className="h-4 w-4"
                />
                <label htmlFor="audio" className="ml-2 block text-[13px]">
                  No conectar al audio
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="video"
                  name="video"
                  type="checkbox"
                  checked={true}
                  className="h-4 w-4"
                />
                <label htmlFor="video" className="ml-2 block text-[13px]">
                  Desactivar mi vídeo
                </label>
              </div>
            </div>

            <div className="mt-4 space-x-4 flex items-center justify-center">
              <button className="rounded-md font-semibold px-5 py-[3px] bg-[#0E71EB] text-white hover:bg-[#0D68D8] active:bg-[#0B5DC2] transition duration-200 ease-in-out">
                Entrar
              </button>
              <button
                onClick={() => setModalMeeting(false)}
                className="rounded-md font-regular border border-gray-500 px-3 py-[3px] hover:bg-[#EFEFF4] active:bg-[#E0E0E8] transition duration-200 ease-in-out"
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
