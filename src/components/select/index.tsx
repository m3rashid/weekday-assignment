/**
 * @quote creating your logic for any other logic-related change is a better implementation than using 3rd party libraries
 */

import { createPortal } from "react-dom";
import { ReactNode, useRef, useState } from "react";

import selectStyles from "./select.module.css";
import { ChevronDown, ChevronUp, Close } from "./icons";

type Value = string | number | boolean;

export type SelectProps = {
  /**
   * @description The value of the selected option
   */
  value: Value;

  /**
   * @description The function that is called when an option is selected
   * @param value The value of the selected option
   * @returns void
   */
  onSelect: (value: Value) => void;

  /**
   * @description The options that are displayed in the select menu
   */
  options: Array<{ value: Value; label: ReactNode }>;
  placeholder?: string;
  label?: string;
  onCancel?: () => void;
};

function Select(props: SelectProps) {
  const [open, setOpen] = useState(false);
  const parentDivRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  /**
   * @description The useEffect hook is used to add an event listener to the window object to close the select menu when the user clicks outside the select menu. Currently, the implementation is not working as expected. The select menu closes when the user clicks on the select menu itself. So, for now, the implementation is commented out.
   */
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
    <div>
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
        ? /**
           * @link https://react.dev/reference/react-dom/createPortal
           * @description The createPortal function is used to render the select menu outside the parent div. This is done so that the select menu can be displayed on top of other elements in the DOM
           * It could be done by absolute and relative positioning, but that would affect this component when it would be used inside a container with overflow: hidden, relative positioning, etc.
           * So, `createPortal` is used to render the select menu outside the parent div
           */
          createPortal(
            <div
              className={selectStyles.selectMenu}
              style={{
                left: parentDivRef.current?.offsetLeft,
                width: parentDivRef.current?.clientWidth || 50, // defaults to width of the selector itself
                // By default portal opens exactly over the trigger element, so add some offset to make it look like a dropdown
                top: (parentDivRef.current?.offsetTop || 0) + (parentDivRef.current?.clientHeight || 0) + 6,
              }}
            >
              {props.options.map((option) => {
                return (
                  <div
                    key={"sel--" + String(option.value)} // key should be unique
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
            document.body // the position where the portal needs to be opened
          )
        : null}
    </div>
  );
}

export default Select;
