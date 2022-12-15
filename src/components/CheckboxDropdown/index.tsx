import React, { useState } from "react";
import CheckboxCol from "../CheckboxCol";

const CheckboxDropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const list = [
    { label: "Article", value: "article" },
    { label: "Case Study", value: "study" },
    { label: "Prodcast", value: "prodcast" },
    { label: "On-Demand Webinar", value: "demand" },
    { label: "Live Webinar", value: "live" },
  ];

  const dropDownOpen = () => {
    setOpen(!open);
  };

  const changeCheckbox = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
    setTimeout(() => {
      setOpen(false);
    }, 700);
  };

  return (
    <div className="w-[250px]">
      <div
        className="flex items-center cursor-pointer flex-row-reverse"
        onClick={() => dropDownOpen()}
      >
        <svg
          version="1.1"
          id="Layer_1"
          className="h-[16px] ml-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
            <p className=" uppercase">All Content</p>{" "}
      </div>
      {open && (
        <div className="rounded-md border-2 border-[#3f8c07]  p-3">
            <CheckboxCol
              options={list}
              handleChange={(e: any) => changeCheckbox(e)}
              value={value}
            />
        </div>
      )}
    </div>
  );
};

export default CheckboxDropDown;
