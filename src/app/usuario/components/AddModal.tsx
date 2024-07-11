import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddModal = ({ openModal, setOpenModal }: Props) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const footerContent = (
    <div className="field grid">
      <div className="col-12 md:col-6 ">
        <Button
          label="Confirmar"
          icon="pi pi-check"
          onClick={() => setOpenModal(false)}
          className="p-button-text border-2 bg-blue-500 text-white hover:bg-blue-700 flex justify-content-center"
          style={{ height: "2.5rem" }}
          autoFocus
        />
      </div>
      <div className="col-12 md:col-6">
        <Button
          label="Cancelar"
          icon="pi pi-times"
          onClick={closeModal}
          style={{ height: "2.5rem" }}
          className="p-button-text border-2 text-blue-500 hover:bg-red-700 hover:text-white flex justify-content-center"
        />
      </div>
    </div>
  );

  return (
    <div className="field grid">
      <Dialog
        header="Usuario"
        visible={openModal}
        style={{ width: "70vw" }}
        onHide={() => {
          if (!openModal) return;
          setOpenModal(false);
        }}
        footer={footerContent}
        className=""
      >
        <div className="card flex flex-column align-items-center gap-5 my-5 ">
          <div className="col-12">
            <p className="font-bold">Id:</p>
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"></InputIcon>
              <InputText
                type="text"
                className=""
                placeholder="Ingrese el id del usuario"
                style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
              />
            </IconField>
          </div>
          <div className="col-12">
            <p className="font-bold">Nombre:</p>
            <InputText
              type="text"
              className=""
              placeholder="Ingrese el nombre del usuario"
              style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
            />
          </div>
          <div className="col-12">
            <p className="font-bold">Estado:</p>
            <AutoComplete
              value={value}
              suggestions={items}
              completeMethod={search}
              onChange={(e) => setValue(e.value)}
              forceSelection
              dropdown
              style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
            />
          </div>
          <div className="col-12">
            <p className="font-bold">Sector:</p>
            <div className="">
              <AutoComplete
                value={value}
                suggestions={items}
                completeMethod={search}
                onChange={(e) => setValue(e.value)}
                forceSelection
                dropdown
                style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddModal;
