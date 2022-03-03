import React from "react";

export default function ItemUser({
  photo = "",
  fullname = "Nombre",
  activeAudio = false,
  activeVideo = false,
}) {
  return (
    <div className="cursor-pointer w-full flex justify-between px-4 py-1 hover:bg-[#F8F8F8] transition duration-200 ease-in-out">
      <div className="flex justify-center items-center">
        {/* Foto del usuario */}
        <div className="bg-[#E4E4E4] rounded-md w-8 h-8 flex items-center justify-center overflow-hidden">
          <i className="fa-solid fa-user text-white"></i>
        </div>

        {/* Nombre del usuario */}
        <span className="pl-3 text-sm">{fullname}</span>
      </div>

      {/* Iconos de audio y video */}
      <div className="flex space-x-2 items-center">
        <div className="flex items-center justify-center w-4">
          <i
            className={`fa-solid fa-sm ${
              activeAudio
                ? "fa-microphone text-[#747487]"
                : "fa-microphone-slash text-red-500"
            }`}
          ></i>
        </div>
        <div className="flex items-center justify-center w-5">
          <i
            className={`fa-solid fa-sm ${
              activeVideo
                ? "fa-video text-[#747487]"
                : "fa-video-slash text-red-500"
            }`}
          ></i>
        </div>
      </div>
    </div>
  );
}
