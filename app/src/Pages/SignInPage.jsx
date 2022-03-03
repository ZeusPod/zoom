import React from "react";

import { useNavigate } from "react-router-dom";
import routes from "../helpers/routes";

export default function SignInPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 items-center justify-center overflow-y-auto">
      {/* Contenedor del formulario */}
      <div className="flex max-w-5xl h-[590px] rounded-xl overflow-hidden shadow-none sm:shadow-2xl sm:grid sm:grid-cols-2 lg:w-2/3">
        {/* Columna de portada */}
        <div className="hidden flex-col bg-[#DAE0E9] items-center justify-center sm:flex">
          <div className="flex flex-col items-center space-y-4 mb-24">
            <span className="font-semibold text-4xl text-[#595959]">
              INGRESAR
            </span>
            <span className="text-lg text-[#595959]">
              ¡Le damos nuevamente la bienvenida!
            </span>
          </div>
          <div className="mt-24">
            <span className="text-xm text-[#595959]">¿Es nuevo en Zoom?</span>
            <button
              onClick={() => navigate(routes.signup)}
              className="text-[#59595D] font-semibold pl-2 hover:text-[#63A4F2] active:text-[#0D68D8]"
            >
              Registrese gratis
            </button>
          </div>
        </div>

        {/* Columna de formulario */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center space-y-4 w-[350px] px-2">
            <div className="flex flex-col sm:hidden">
              <span className="font-semibold text-2xl text-[#595959]">
                Ingresar
              </span>
              <div className="">
                <span className="text-xm text-[#595959]">
                  ¿Es nuevo en Zoom?
                </span>
                <button
                  onClick={() => navigate(routes.signup)}
                  className="text-[#0E71EB] pl-2 hover:text-[#63A4F2] active:text-[#0D68D8]"
                >
                  Registrese gratis
                </button>
              </div>
            </div>

            <div className="py-2 sm:hidden">
              <hr className="border-[#DEDEE3]" />
            </div>

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

            {/*Contraseña */}
            <div className="flex flex-col  space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-[#747487]">Contraseña</span>
                <button
                  onClick={() => navigate(routes.forgotPassword)}
                  className="text-sm text-[#0E71EB] hover:text-[#63A4F2] active:text-[#0D68D8]"
                >
                  ¿Olvidó su contraseña?
                </button>
              </div>
              <input
                className="appearance-none rounded-xl px-3 py-2 border-2 border-[#BABACC] placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-[#0E71EB] sm:text-sm"
                type="password"
                required
                placeholder="Contraseña"
              ></input>
            </div>

            {/* Politica y terminos */}
            <div>
              <span className="text-xs text-[#747487]">
                Mediante este inicio de sesión, acepto la{" "}
                <span className="text-[#0E71EB]">
                  Política de privacidad de Zoom{" "}
                </span>
                y los{" "}
                <span className="text-[#0E71EB]">Términos de servicio</span>.
              </span>
            </div>

            {/* Boton iniciar */}
            <button className="rounded-md px-5 py-2 bg-[#0E71EB] text-white text-[16px] hover:bg-[#0D68D8] active:bg-[#0B5DC2] transition duration-200 ease-in-out">
              Ingresar
            </button>

            {/* Recordar cuenta */}
            <div className="flex items-center pt-2">
              <input
                id="session"
                name="session"
                type="checkbox"
                className="h-4 w-4 cursor-pointer"
              />
              <label
                htmlFor="session"
                className="ml-2 block text-sm cursor-pointer"
              >
                No cerrar sesión
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
