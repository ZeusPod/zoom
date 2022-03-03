import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../helpers/routes";

export default function SignUpPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 items-center justify-center overflow-y-auto">
      {/* Contenedor del formulario */}
      <div className="flex max-w-5xl rounded-xl shadow-none sm:shadow-2xl sm:grid sm:grid-cols-2 lg:w-2/3 sm:h-[590px] sm:overflow-hidden">
        {/* Columna de portada */}
        <div className="hidden flex-col bg-[#DAE0E9] items-center justify-center sm:flex">
          <div className="flex flex-col items-center space-y-4 mb-24">
            <span className="font-semibold text-3xl text-[#595959]">
              REGÍSTRESE GRATIS
            </span>
            <span className="text-lg text-[#595959]">
              Reuniones y chat gratuitos
            </span>
          </div>
          <div className="mt-24">
            <span className="text-xm text-[#595959]">
              ¿Ya tiene una cuenta?
            </span>
            <button
              onClick={() => navigate(routes.signin)}
              className="text-[#59595D] font-semibold pl-2 hover:text-[#63A4F2] active:text-[#0D68D8]"
            >
              Ingresar
            </button>
          </div>
        </div>

        {/* Columna de formulario */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-[350px] px-2">
            <div className="block sm:hidden">
              <span className="font-semibold text-2xl text-[#595959]">
                Regístrese gratis
              </span>
              <div className="flex">
                <span className="text-xm text-[#595959]">
                  ¿Ya tiene una cuenta?
                </span>
                <button
                  onClick={() => navigate(routes.signin)}
                  className="text-[#0E71EB] pl-2 hover:text-[#63A4F2] active:text-[#0D68D8]"
                >
                  Ingresar
                </button>
              </div>
            </div>

            <div className="py-4 sm:hidden">
              <hr className="border-[#DEDEE3]" />
            </div>

            <div className="flex flex-col space-y-2">
              {/* Nombre */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-[#747487]">Nombre</span>
                <input
                  className="appearance-none rounded-xl px-3 py-2 border-2 border-[#BABACC] placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-[#0E71EB] text-sm"
                  type="text"
                  required
                ></input>
              </div>

              {/* Apellido */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-[#747487]">Apellido</span>
                <input
                  className="appearance-none rounded-xl px-3 py-2 border-2 border-[#BABACC] placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-[#0E71EB] text-sm"
                  type="text"
                  required
                ></input>
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
                ></input>
              </div>

              {/*Contraseña */}
              <div className="flex flex-col  space-y-1">
                <span className="text-sm text-[#747487]">Contraseña</span>
                <input
                  className="appearance-none rounded-xl px-3 py-2 border-2 border-[#BABACC] placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-[#0E71EB] sm:text-sm"
                  type="password"
                  required
                ></input>
              </div>

              {/* Confirmar Contraseña */}
              <div className="flex flex-col  space-y-1">
                <span className="text-sm text-[#747487]">
                  Confirmar la contraseña
                </span>
                <input
                  className="appearance-none rounded-xl px-3 py-2 border-2 border-[#BABACC] placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-[#0E71EB] sm:text-sm"
                  type="password"
                  required
                ></input>
              </div>
            </div>

            {/* Boton registrarse */}
            <button className="rounded-md mt-2 px-5 py-2 bg-[#0E71EB] text-white text-[16px] hover:bg-[#0D68D8] active:bg-[#0B5DC2] transition duration-200 ease-in-out">
              Registrar
            </button>

            {/* Politica y terminos */}
            <div>
              <span className="text-xs text-[#747487]">
                Mediante este registro, acepto la{" "}
                <span className="text-[#0E71EB]">
                  Política de privacidad de Zoom{" "}
                </span>
                y los{" "}
                <span className="text-[#0E71EB]">Términos de servicio</span>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
