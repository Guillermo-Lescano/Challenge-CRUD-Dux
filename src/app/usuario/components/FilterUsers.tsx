import React, { useState } from "react";

import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

type Props = {};

const FilterUsers = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  return (
    <div className="field grid gap-2 my-5 justify-content-start  ">
      <div className="col-12 md:col-3 ">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <AutoComplete
            placeholder="Buscar"
            value={value}
            suggestions={items}
            completeMethod={search}
            onChange={(e) => setValue(e.value)}
            style={{ width: "15rem", height: "2.5rem", fontSize: "1.2rem" }}
          />
        </IconField>
      </div>
      <div className="col-12 md:col-4 ">
        <AutoComplete
          placeholder="Buscar por estado"
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
          dropdown
          style={{ width: "15rem", height: "2.5rem", fontSize: "1.2rem" }}
        />
      </div>
      <div className="col-12 md:col-3">
        <AutoComplete
          placeholder="Buscar por sector"
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
          dropdown
          style={{ width: "15rem", height: "2.5rem", fontSize: "1.2rem" }}
        />
      </div>
    </div>
  );
};

export default FilterUsers;
