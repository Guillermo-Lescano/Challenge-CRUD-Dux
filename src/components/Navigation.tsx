import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import "primereact/resources/themes/saga-blue/theme.css"; // Tema de PrimeReact
import "primereact/resources/primereact.min.css"; // Estilos principales de PrimeReact
import "primeicons/primeicons.css"; // Iconos de PrimeReact
import "primeflex/primeflex.css"; // Utilidades de PrimeFlex
import DuxIcon from "./images/DuxIcon";

type Props = {};

const Navigation = (props: Props) => {
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Contact",
      icon: "pi pi-cog",
    },
  ];

  return (
    <div className="grid ">
      <div
        className="col-12 flex justify-content-between align-items-center pt-3"
        style={{ backgroundColor: "#005FED" }}
      >
        <div className="col-2">
          <DuxIcon />
        </div>
        <div className="col-2 flex justify-content-end pr-4">
          <h1 className="pi pi-cog text-white text-xl"></h1>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
