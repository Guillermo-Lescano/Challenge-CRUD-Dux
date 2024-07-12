import React, { useEffect, useState } from "react";

import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { usersService } from "@/services/usuarios";
import { Usuario } from "@/dto/Usuarios.dto";

type Props = {};

const FilterUsers = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [users, setUsers] = useState<Usuario[]>([]);
  const [sectors, setSectors] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await usersService.getUsers();
        const data = response;
        // Extraer sectores y eliminar duplicados
        const numericSectors = data.map((item: { sector: number | string }) =>
          Number(item.sector)
        );
        const uniqueSectors = [...new Set(numericSectors)];

        setSectors(uniqueSectors);

        // Extraer usuarios y eliminar duplicados
        const userNames = data.map((item: { usuario: string }) => item.usuario);
        const uniqueUsers = [...new Set(userNames)];
        setUsers(uniqueUsers);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const opciones = ["activo", "inactivo"];

  const statusSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItems(
      opciones.filter((opcion) =>
        opcion.toLowerCase().includes(event.query.toLowerCase())
      )
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const sectorSearch = (event: { query: string }) => {
    const query = parseInt(event.query, 10);
    if (!isNaN(query)) {
      setItems(
        sectors.filter((sector) => sector.toString().includes(query.toString()))
      );
    } else {
      setItems(sectors);
    }
  };

  const userSearch = (event: { query: string }) => {
    const query = event.query.toLowerCase();
    setItems(users.filter((user) => user.toLowerCase().includes(query)));
  };

  return (
    <div className="field grid gap-2 my-5 justify-content-start  ">
      <div className="col-12 md:col-3 ">
        <AutoComplete
          value={value.usuario}
          suggestions={users}
          name="usuario"
          completeMethod={userSearch}
          onChange={handleChange}
          forceSelection
          style={{ width: "15rem", height: "2.5rem", fontSize: "1.2rem" }}
        />
      </div>
      <div className="col-12 md:col-4 ">
        <AutoComplete
          placeholder="Seleccionar el estado"
          value={value.estado}
          suggestions={items}
          name="estado"
          completeMethod={statusSearch}
          onChange={handleChange}
          forceSelection
          dropdown
          style={{ width: "15rem", height: "2.5rem", fontSize: "1.2rem" }}
        />
      </div>
      <div className="col-12 md:col-3">
        <AutoComplete
          placeholder="Seleccionar el sector"
          value={value.sector}
          suggestions={items}
          name="sector"
          completeMethod={sectorSearch}
          /* onChange={(e) => setValue(e.value)} */
          onChange={handleChange}
          forceSelection
          dropdown
          style={{ width: "15rem", height: "2.5rem", fontSize: "1.2rem" }}
        />
      </div>
    </div>
  );
};

export default FilterUsers;
