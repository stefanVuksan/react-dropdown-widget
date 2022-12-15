import React from "react";

const CheckboxCol = (props:any) => {
  const loop = (options:any) => {
    const rows = [];
    for (let i = 0; i < options.length; i++) {
      rows.push(
        <div className="flex items-center py-1" key={i}>
          <input
            type={"radio"}
            value={options[i].value}
            className={`m-0 ${props.colReverse ? "flex-reverse" : ""}`}
            style={{ marginLeft: "5px" }}
            name="oneCheck"
            checked={props.value === options[i].value ? true : false}
            id={"oneCheck_" + i}
            onChange={props.handleChange}
          />
          <label htmlFor={"oneCheck_" + i}>{options[i].label}</label>
        </div>
      );
    }
    return rows;
  };
  return (
    <>
          {props.options ? loop(props.options) : ""}
    </>
  );
};

export default CheckboxCol;
