import React from "react";

export default function Button({ value = "Boton" }) {
  return (
    <button className="rounded-md px-5 py-2 bg-[#0E71EB] text-white text-[16px] hover:bg-[#0D68D8] active:bg-[#0B5DC2] transition duration-200 ease-in-out">
      {value}
    </button>
  );
}
