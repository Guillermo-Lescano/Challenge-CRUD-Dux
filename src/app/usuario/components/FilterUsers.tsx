import React, { useState } from "react";

import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";

type Props = {};

const FilterUsers = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  return (
    <div className="card flex justify-content-start gap-8 mb-5 ">
      <div>
        <AutoComplete
          placeholder="Buscar"
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
          style={{ width: "10rem", height: "2.5rem", fontSize: "1.2rem" }}
        />
      </div>
      <div>
        <AutoComplete
          placeholder="Buscar por estado"
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
          style={{ width: "10rem", height: "2.5rem", fontSize: "1.2rem" }}
        />
      </div>
      <div>
        <AutoComplete
          placeholder="Buscar por sector"
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
          style={{ width: "10rem", height: "2.5rem", fontSize: "1.2rem" }}
        />
      </div>
    </div>
  );
};

export default FilterUsers;
