import { useDispatch, useSelector } from "react-redux";

import Select from "../select";
import { Dispatch } from "../../types";
import { RootState } from "../../store";
import styles from "./filters.module.css";
import { ChangeFiltersAction, JobFilters } from "../../store/job/helpers";

function Filters() {
  const dispatch: Dispatch<ChangeFiltersAction> = useDispatch();
  const { filters, jdList } = useSelector((state: RootState) => state.job);

  const handleChange = (payload: JobFilters) => dispatch({ type: "MODIFY_FILTERS", payload });

  return (
    <div className={styles.filterRoot}>
      <Select
        label="Roles"
        placeholder="Experience"
        value={filters.minExp || 0}
        onCancel={() => handleChange({ minExp: 0 })}
        onSelect={(val) => handleChange({ minExp: Number(val) })}
        options={Array.from({ length: 10 }).map((_, i) => ({ label: (i + 1).toString(), value: i + 1 }))}
      />
      <Select
        placeholder="Company"
        value={filters.companyName || ""}
        onCancel={() => handleChange({ companyName: "" })}
        onSelect={(val) => handleChange({ companyName: String(val) })}
        options={jdList.map((t) => ({ value: t.companyName, label: t.companyName }))}
      />
      <Select
        placeholder="Location"
        value={filters.location || ""}
        onCancel={() => handleChange({ location: "" })}
        onSelect={(val) => handleChange({ location: String(val) })}
        options={jdList.map((t) => ({ value: t.location, label: t.location }))}
      />
      <Select
        placeholder="Job Role"
        value={filters.jobRole || ""}
        onSelect={(val) => handleChange({ jobRole: String(val) })}
        options={jdList.map((t) => ({ value: t.jobRole, label: t.jobRole }))}
      />

      <Select
        placeholder="Min Base Pay"
        label="Min Base Pay"
        value={filters.minJdSalary || 0}
        onSelect={(val) => handleChange({ minJdSalary: Number(val) })}
        options={Array.from({ length: 10 }).map((_, t) => ({ value: t + 1, label: `${t + 1} L` }))}
      />
      <Select
        placeholder="Remote"
        value={filters.remote || false}
        onSelect={(val) => handleChange({ remote: Boolean(val) })}
        options={[
          { label: "Remote", value: true },
          { label: "On Site", value: false },
        ]}
      />
    </div>
  );
}

export default Filters;
