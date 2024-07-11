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
      <div className="field grid">
        <div className="col-12 md:col-3">
          <h1>Usuarios</h1>
        </div>
        <div className="col-12 md:col-9 flex justify-content-end">
          <Button
            label="Nuevo Usuario"
            icon="pi pi-plus"
            className=" bg-blue-500 text-white hover:bg-blue-700 w-3"
            style={{ height: "2.5rem", paddingLeft: "0.7rem" }}
            onClick={toggleModal}
          />
        </div>
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
