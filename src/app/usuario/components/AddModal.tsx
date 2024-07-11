import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddModal = ({ openModal, setOpenModal }: Props) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  const footerContent = (
    <div className="flex justify-content-center gap-5 mb-5">
      <Button
        label="Confirmar"
        icon="pi pi-check"
        onClick={() => setOpenModal(false)}
        className="p-button-text border-2 bg-blue-500 text-white hover:bg-blue-700 w-2"
        style={{ height: "2.5rem" }}
        autoFocus
      />
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={closeModal}
        className="p-button-text border-2 text-blue-500 hover:bg-red-700 hover:text-white w-2 h-2"
      />
    </div>
  );

  return (
    <div>
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
          <div>
            <p className="font-bold">Id:</p>
            <InputText
              type="text"
              className=""
              placeholder="Ingrese el id del usuario"
              style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
            />
          </div>
          <div>
            <p className="font-bold">Nombre:</p>
            <InputText
              type="text"
              className=""
              placeholder="Ingrese el nombre del usuario"
              style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
            />
          </div>
          <div>
            <p className="font-bold">Estado:</p>
            <InputText
              type="text"
              className=""
              placeholder="Large"
              style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
            />
          </div>
          <div>
            <p className="font-bold">Sector:</p>
            <InputText
              type="text"
              className=""
              placeholder="Large"
              style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddModal;
