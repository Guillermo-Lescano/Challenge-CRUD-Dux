import React from "react";
import Table from "./components/Table";

type Props = {};

const page = (props: Props) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Usuarios</h1>
      <Table />
    </div>
  );
};

export default page;
