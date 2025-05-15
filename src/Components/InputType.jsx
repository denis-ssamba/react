import React from "react";

const InputType = ({ label, id, value, onChange }) => {
  console.log("rerender from child component inputtype");
  return (
    <>
      <label>{label}</label>
      <input type="text" id={id} value={value} onChange={onChange} />
      <br></br>
    </>
  );
};

export default InputType;
