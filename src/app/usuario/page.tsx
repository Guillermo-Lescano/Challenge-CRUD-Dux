"use client";

import React, { useState } from "react";
import Table from "./components/Table";
import { Button } from "primereact/button";
import AddModal from "./components/AddModal";
import FilterUsers from "./components/FilterUsers";

type Props = {};

const page = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="card flex justify-content-between my-5">
        <h1>Usuarios</h1>
        <Button
          label="Nuevo Usuario"
          icon="pi pi-plus"
          className=" bg-blue-500 text-white hover:bg-blue-700 w-2"
          onClick={toggleModal}
        />
        <AddModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <div>
        <FilterUsers />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default page;
