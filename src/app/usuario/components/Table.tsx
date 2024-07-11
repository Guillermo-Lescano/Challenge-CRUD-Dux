"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Usuario } from "@/dto/Usuarios.dto";
import { usersService } from "@/services/usuarios";

const Table = () => {
  const [users, setUsers] = useState<Usuario[]>([]);

  const fetchData = async () => {
    const response = await usersService.getUsers();
    setUsers(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const usuarioBodyTemplate = (users: Usuario) => {
    return (
      <span
        style={{
          color: "#0763E7",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {users.usuario}
      </span>
    );
  };

  return (
    <div>
      <DataTable
        value={users}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 25, 50]}
        tableStyle={{ width: "70rem", height: "25rem" }}
      >
        <Column field="id" header="Id" sortable></Column>
        <Column
          field="usuario"
          header="Usuario"
          body={usuarioBodyTemplate}
          sortable
        ></Column>
        <Column field="estado" header="Estado" sortable></Column>
        <Column field="sector" header="Sector" sortable></Column>
      </DataTable>
    </div>
  );
};

export default Table;
