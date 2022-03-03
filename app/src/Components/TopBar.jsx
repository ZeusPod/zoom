import { useNavigate } from "react-router-dom";
import routes from "../helpers/routes";
import itembar from "./item.bar.menu";

export default function TopBar({ select = 0, setSelect }) {
  const navigate = useNavigate();
  const handleChanged = (index) => {
    setSelect(index);
  };

  return (
    <div className="bg-[#F2F2F5]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-14">
        <div className="relative flex items-center justify-between h-14 sm:justify-center">
          {/* Columna izquierda */}
          <div className="flex flex-shrink-0 justify-center items-center">
            <input
              type="text"
              placeholder="Buscar"
              className=" text-xs rounded-md px-2 py-2 placeholder-[#000] bg-[#DEDEE3] hover:bg-[#E6E6E9] transition duration-200 ease-in-out"
            />
          </div>

          {/* Columna centro */}
          <div className="flex-1 justify-center items-center space-x-8 hidden sm:flex">
            {itembar.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleChanged(index)}
                  className={`flex flex-col items-center ${
                    index === select
                      ? "text-[#0E71EB]"
                      : "text-[#989898] hover:text-[#2E2E2E] transition duration-200 ease-in-out"
                  }`}
                >
                  <i
                    className={`${
                      index === select ? item.iconSelect : item.icon
                    }`}
                  />
                  <span
                    className={`text-xs ${index !== select && "text-black"}`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Columna derecha */}
          <div className="flex flex-shrink-0 justify-center items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => navigate(routes.signin)}
                className="rounded-md px-5 py-[3px] bg-[#0E71EB] text-white text-sm hover:bg-[#0D68D8] active:bg-[#0B5DC2] transition duration-200 ease-in-out"
              >
                Ingresar
              </button>
              <button
                onClick={() => navigate(routes.signup)}
                className="rounded-md font-regular border border-gray-500 px-3 py-[3px] text-sm hover:bg-[#EFEFF4] active:bg-[#E0E0E8] transition duration-200 ease-in-out"
              >
                Registrarse
              </button>
            </div>

            <div className="hidden bg-[#E4E4E4] rounded-md w-8 h-8 items-center justify-center">
              <i className="fa-solid fa-user text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
