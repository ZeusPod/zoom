import React from "react";

export default function Modal({
  children,
  status = false,
  changeStatus,
  title = "Alerta",
  showHeader = true,
  showOverlay = true,
}) {
  return (
    <>
      {status && (
        <div
          className={`w-full h-full fixed top-0 left-0 flex items-center justify-center p-10 ${
            showOverlay && "bg-black bg-opacity-50"
          }`}
        >
          {/* Contenedor modal */}
          <div className="min-w-[395px] min-h-[100px] bg-white relative rounded-md shadow-md p-5">
            {/* Encabezado */}
            {showHeader && (
              <div className="flex items-center justify-between mb-5 pb-5 border-b">
                <h3 className="text-[#878FB8]">{title}</h3>
              </div>
            )}
            <button
              onClick={() => changeStatus(false)}
              className="absolute top-5 right-5 text-[#878FB8] hover:text-red-500 transition duration-200 ease-in-out"
            >
              <i className="fas fa-times"></i>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
