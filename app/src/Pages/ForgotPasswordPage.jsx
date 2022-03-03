import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../helpers/routes";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="flex flex-col min-w-[350px] max-w-lg space-y-4 px-10">
        <span className="font-semibold text-2xl text-[#595959]">
          ¿Olvidó su contraseña?
        </span>
        <span className="text-xm text-[#595959]">
          No se preocupe. Restablecer su contraseña es fácil: solo díganos con
          qué dirección de e-mail se registró en Zoom.
        </span>

        {/*Correo electronico */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm text-[#747487]">
            Dirección de correo electrónico
          </span>
          <input
            className="appearance-none rounded-xl px-3 py-2 border-2 border-[#BABACC] placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-[#0E71EB] text-sm"
            type="email"
            required
            placeholder="Dirección de correo electrónico"
          ></input>
        </div>

        {/* Boton enviar */}
        <button className="rounded-md px-5 py-2 bg-[#0E71EB] text-white text-[16px] hover:bg-[#0D68D8] active:bg-[#0B5DC2] transition duration-200 ease-in-out">
          Enviar
        </button>

        {/* Boton cancelar */}
        <button
          onClick={() => navigate(routes.signin)}
          className="rounded-md px-5 py-2 border border-gray-500 text-[16px] hover:bg-[#EFEFF4] active:bg-[#E0E0E8] transition duration-200 ease-in-out"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
