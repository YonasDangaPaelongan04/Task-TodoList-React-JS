import React from "react";

const Input = ({ placeholder, type, value, change }) => {
  return (
    <Input
      classname="myinput"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={change}
    />
  );
};

export default Input;
