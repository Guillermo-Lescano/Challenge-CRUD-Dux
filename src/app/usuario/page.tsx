"use client";

import React, { useState } from "react";
import Table from "./components/Table";
import { Button } from "primereact/button";
import AddModal from "./components/AddModal";

type Props = {};

const page = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="card flex justify-content-center">
        <h1>Usuarios</h1>
        <Button
          label="Nuevo Usuario"
          icon="pi pi-plus"
          className="p-button-outlined ml-2 bg-blue-500 text-white"
          onClick={toggleModal}
        />
        <AddModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <Table />
    </div>
  );
};

export default page;
