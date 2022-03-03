import React, { useState } from "react";
import itembar from "./item.bar.menu";

export default function BottomBar({ select = 0, setSelect }) {
  const handleChanged = (index) => {
    setSelect(index);
  };
  return (
    <div className="grid grid-cols-4 border-t py-4 sm:hidden">
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
              className={`${index === select ? item.iconSelect : item.icon}`}
            />
            <span className={`text-xs ${index !== select && "text-black"}`}>
              {item.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
