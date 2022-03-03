import React, { useState } from "react";
import ItemChat from "../Components/ItemChat";
import ItemUser from "../Components/ItemUser";

export default function MeetingPage() {
  const [showUsers, setShowUsers] = useState(true);
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="bg-[#1A1A1A] flex h-screen w-full overflow-y-auto">
      {/* Contenedor de camaras y opciones */}
      <div className="flex flex-1 flex-col">
        {/* Camaras y participantes */}
        <div className="flex flex-1"></div>

        {/* Opciones */}
        <div className="h-14 flex justify-between">
          <div className="flex">
            <button className="flex flex-col rounded-md h-14 items-center justify-center px-2 hover:bg-[#2E2E2E]">
              <i className="fa-solid fa-microphone-slash fa-lg pb-3 text-[#A8A8A8]" />
              <span className="text-xs text-[#A8A8A8]">Activar audio</span>
            </button>

            <button className="flex flex-col rounded-md h-14 items-center justify-center px-2 hover:bg-[#2E2E2E]">
              <i className="fa-solid fa-video-slash fa-lg pb-3 text-[#A8A8A8]" />
              <span className="text-xs text-[#A8A8A8]">Iniciar video</span>
            </button>

            <button
              onClick={() => setShowUsers(!showUsers)}
              className="flex flex-col rounded-md h-14 items-center justify-center px-2 hover:bg-[#2E2E2E]"
            >
              <i className="fa-solid fa-user-group fa-lg text-[#A8A8A8]" />
              <span className="text-xs text-[#A8A8A8] pt-3">Participantes</span>
            </button>

            <button
              onClick={() => setShowChat(!showChat)}
              className="flex flex-col rounded-md h-14 items-center justify-center px-6 hover:bg-[#2E2E2E]"
            >
              <i className="fa-solid fa-message fa-lg pb-3 text-[#A8A8A8]" />
              <span className="text-xs text-[#A8A8A8]">Chat</span>
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button className="rounded-md px-4 py-1 mr-2 text-white bg-red-700 hover:bg-red-500">
              Finalizar
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          !showUsers && !showChat ? "hidden" : "flex"
        } flex-col w-80 bg-white overflow-y-auto`}
      >
        {/* Participantes */}
        <div
          className={`flex-1 flex-col w-full overflow-y-auto ${
            showUsers ? "flex" : "hidden"
          }`}
        >
          <span className="text-[13px] py-3 font-bold text-center">
            Participantes (5)
          </span>

          <div className="flex flex-col overflow-y-auto">
            <ItemUser fullname="Jose Castro" activeAudio={true} />
            <ItemUser fullname="Angela Piña" />
            <ItemUser fullname="Anthony Flores" activeVideo={true} />
            <ItemUser fullname="Carlos Aguilar" />
            <ItemUser fullname="Cesar Perez" />
          </div>
        </div>

        {/* Separador */}
        <div
          className={`px-4 py-4 ${
            (showUsers === true && showChat === false) ||
            (showUsers === false && showChat === true) ||
            (showUsers === false && showChat === false)
              ? "hidden"
              : ""
          }`}
        >
          <hr className="border-[#DEDEE3]" />
        </div>

        {/* Chat */}
        <div
          className={`flex-1 flex-col w-full overflow-y-auto ${
            showChat ? "flex" : "hidden"
          }`}
        >
          <span className="text-[13px] py-3 font-bold text-center">Chat</span>

          <div className="flex flex-1 flex-col space-y-1 overflow-y-auto">
            <ItemChat fullname="Angela Piña" myMessage={false} />
            <ItemChat />
            <ItemChat />
            <ItemChat fullname="Carlos Aguilar" myMessage={false} />
            <ItemChat />
            <ItemChat fullname="Cesar Perez" myMessage={false} />
            <ItemChat />
            <ItemChat fullname="Angela Piña" myMessage={false} />
          </div>

          <div className="flex justify-between items-center px-2 py-2 h-8">
            <div>
              <span className="text-[13px]">Enviar a:</span>
              <select className="text-[13px] ml-2 px-2 bg-[#F2F2F7]">
                <option>Todos</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button className="fa-regular fa-file text-[#D5D5D5]" />
              <button className="fa-regular fa-face-smile text-[#D5D5D5]" />
            </div>
          </div>

          <div>
            <textarea
              className="border-none border-transparent w-full p-2"
              placeholder="Escribir mensaje aquí"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
