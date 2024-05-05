import { createPortal } from "react-dom";
import { ReactNode, useRef, useState } from "react";

import selectStyles from "./select.module.css";
import { ChevronDown, ChevronUp, Close } from "./icons";

type Value = string | number | boolean;

export type SelectProps = {
  value: Value;
  onSelect: (value: Value) => void;
  options: Array<{ value: Value; label: ReactNode }>;
  placeholder?: string;
  label?: string;
  onCancel?: () => void;
};

function Select(props: SelectProps) {
  const [open, setOpen] = useState(false);
  const parentDivRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (parentDivRef.current && !parentDivRef.current.contains(event.target as Node)) {
  //       console.log("handleClickOutside");
  //       setOpen(false);
  //     }
  //   }
  //   window.addEventListener("click", handleClickOutside);
  //   return () => window.removeEventListener("click", handleClickOutside);
  // }, []);

  return (
    <div style={{}}>
      <div className={selectStyles.label}>{props.label}</div>
      <div ref={parentDivRef} className={selectStyles.select} onClick={toggleMenu}>
        {props.options.find((option) => option.value === props.value)?.label || props.placeholder || "Select an option"}
        {props.onCancel && props.value ? <Close onClick={props.onCancel} style={{ marginLeft: 10 }} /> : null}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 2, backgroundColor: "lightgray", height: 20, borderRadius: 2, marginLeft: 5, marginRight: 5 }} />
          {open ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      {open
        ? createPortal(
            <div
              className={selectStyles.selectMenu}
              style={{
                left: parentDivRef.current?.offsetLeft,
                width: parentDivRef.current?.clientWidth || 50,
                top: (parentDivRef.current?.offsetTop || 0) + (parentDivRef.current?.clientHeight || 0) + 6,
              }}
            >
              {props.options.map((option) => {
                return (
                  <div
                    key={"sel--" + String(option.value)}
                    className={selectStyles.option}
                    onClick={() => {
                      props.onSelect(option.value);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                  </div>
                );
              })}
            </div>,
            document.body
          )
        : null}
    </div>
  );
}

export default Select;
