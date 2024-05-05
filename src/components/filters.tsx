import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import CustomSelect from "./select";
import styles from "./filters.module.css";

function Filters() {
  function handleChange(e: SelectChangeEvent<number>) {
    console.log(e.target.value);
  }

  const age = 30;

  return (
    <div className={styles.filterRoot}>
      <CustomSelect
        onSelect={console.log}
        options={[
          { label: "One", value: 1 },
          { label: "Two", value: 2 },
          { label: "Three", value: 3 },
        ]}
        value={1}
      />

      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </div>
  );
}

export default Filters;
