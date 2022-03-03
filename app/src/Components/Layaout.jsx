import React, { useState } from "react";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import { useLocation } from "react-router-dom";

export default function Layaout({ children }) {
  const [selected, setSelected] = useState(0);

  const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col flex-1 overflow-hidden">
        {!location.pathname.includes("meeting") && (
          <TopBar select={selected} setSelect={setSelected}></TopBar>
        )}
        {children}
        {!location.pathname.includes("meeting") && (
          <BottomBar select={selected} setSelect={setSelected}></BottomBar>
        )}
      </div>
    </div>
  );
}
