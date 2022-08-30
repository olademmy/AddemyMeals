import React from "react";
const Address = (props) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <textarea {...props.input}></textarea>
    </div>
  );
};
export default Address;
