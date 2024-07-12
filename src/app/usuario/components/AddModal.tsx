import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Usuario } from "@/dto/Usuarios.dto";
import { usersService } from "@/services/usuarios";

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  user?: Usuario;
};

const AddModal = ({ openModal, setOpenModal, user }: Props) => {
  const [value, setValue] = useState<Usuario>({
    id: "",
    usuario: "",
    estado: "",
    sector: 0,
  });
  const [items, setItems] = useState<string[]>([]);
  const [sectors, setSectors] = useState<[]>([]);

  useEffect(() => {
    // Función para obtener datos de la API
    const fetchData = async () => {
      try {
        const response = await usersService.getUsers(); // Reemplaza con la URL de tu API
        const data = response;
        // Extraer sectores y eliminar duplicados
        const numericSectors = data.map((item: { sector: number | string }) =>
          Number(item.sector)
        );
        const uniqueSectors = [...new Set(numericSectors)];

        setSectors(uniqueSectors);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  console.log("sectors", sectors);
  // Las opciones posibles
  const opciones = ["activo", "inactivo"];

  // Método de búsqueda
  const statusSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItems(
      opciones.filter((opcion) =>
        opcion.toLowerCase().includes(event.query.toLowerCase())
      )
    );
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => {
      setValue({ id: "", usuario: "", estado: "", sector: 0 });
      closeModal();
    }, 1000);
  };

  const closeModal = () => {
    setValue({ id: "", usuario: "", estado: "", sector: 0 });
    setOpenModal(false);
  };

  console.log("user en modal", user);

  const footerContent = (
    <div className="field grid">
      <div className="col-12 md:col-6 ">
        <Button
          label="Confirmar"
          icon="pi pi-check"
          type="submit"
          onClick={() => {
            console.log("Usuario añadido:", value); // Aquí puedes añadir lógica para enviar los datos
            onSubmit;
          }}
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
    <div className="field grid ">
      <Dialog
        header={user ? "Editar usuario" : "Añadir usuario"}
        visible={openModal}
        style={{ width: "70vw" }}
        onHide={() => {
          if (!openModal) return;
          setOpenModal(false);
        }}
        footer={footerContent}
        className=""
      >
        <div className="card flex flex-column align-items-center gap-5 m-5 ">
          <div className="col-12">
            <p className="font-bold">Id:</p>
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"></InputIcon>
              <InputText
                type="text"
                name="id"
                value={user ? user.id : value.id}
                placeholder="Ingrese el id del usuario"
                onChange={handleChange}
                style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
              />
            </IconField>
          </div>
          <div className="col-12">
            <p className="font-bold">Nombre:</p>
            <InputText
              type="text"
              name="usuario"
              value={user ? user.usuario : value.usuario}
              placeholder="Ingrese el nombre del usuario"
              onChange={handleChange}
              style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
            />
          </div>
          <div className="col-12">
            <p className="font-bold">Estado:</p>
            <AutoComplete
              value={user ? user.estado : value.estado}
              suggestions={items}
              name="estado"
              completeMethod={statusSearch}
              /* onChange={(e) => setValue(e.value)} */
              onChange={handleChange}
              forceSelection
              dropdown
              style={{ width: "40rem", height: "2.5rem", fontSize: "1.2rem" }}
            />
          </div>
          <div className="col-12">
            <p className="font-bold">Sector:</p>
            <div className="">
              <AutoComplete
                value={user ? user.sector : value.sector}
                suggestions={items}
                name="sector"
                completeMethod={sectorSearch}
                /* onChange={(e) => setValue(e.value)} */
                onChange={handleChange}
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
