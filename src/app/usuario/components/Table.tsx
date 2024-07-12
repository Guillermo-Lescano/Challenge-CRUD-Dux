"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Usuario } from "@/dto/Usuarios.dto";
import { usersService } from "@/services/usuarios";
import AddModal from "./AddModal";

const Table = () => {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [user, setUser] = useState<Usuario>({
    id: "",
    usuario: "",
    estado: "",
    sector: 0,
  });

  const fetchData = async () => {
    const response = await usersService.getUsers();
    setUsers(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUserClick = async (id: string) => {
    const response = await usersService.getOneUser(id);
    setUser(response);
    setOpenModal(true);
  };

  const deleteUsers = async (id: string) => {
    await usersService.deleteUser(id);
  };

  const usuarioBodyTemplate = (users: Usuario) => {
    return (
      <span
        style={{
          color: "#0763E7",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => handleUserClick(users.id)}
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
        rowsPerPageOptions={[5, 10, 25, 50]}
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

      <AddModal openModal={openModal} setOpenModal={setOpenModal} user={user} />
    </div>
  );
};

export default Table;
