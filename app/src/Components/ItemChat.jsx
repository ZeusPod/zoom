import React from "react";
const date = new Date();

export default function ({
  photo = "",
  fullname = "Nombre",
  message = "Mensaje de prueba",
  dateTime = `${date.getHours()}:${date.getMinutes()}`,
  myMessage = true,
}) {
  return (
    <div className="flex w-full px-2 space-x-2">
      {/* Foto del usuario */}
      <div className="flex items-end">
        <div className="bg-[#E4E4E4] rounded-md w-8 h-8 flex items-center justify-center">
          <i className="fa-solid fa-user text-white"></i>
        </div>
      </div>

      {/* Información del mensaje */}
      <div className="flex flex-1 flex-col">
        {/* De quien es el mensaje y hora */}
        <div className="pb-1 flex justify-between cursor-default">
          <span className="text-xs">
            {/* Se tiene que modificar el texto */}
            {`${myMessage ? "De mí" : fullname} para `}
            <span className="text-[#0E71EB]">Todos</span>
          </span>
          <span className="text-xs flex justify-between">{dateTime}</span>
        </div>

        {/* Mensaje */}
        <div className="flex">
          <div className="min-h-[32px] rounded-md bg-[#DFF0FF] px-3 flex items-center">
            <span className="text-sm">{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
