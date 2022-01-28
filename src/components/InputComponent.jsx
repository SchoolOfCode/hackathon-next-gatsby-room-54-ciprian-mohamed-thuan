import React from "react";
import { Input } from "@chakra-ui/react";

function InputComponent({ handleChange, name }) {
  return (
    <Input placeholder="Search here" onChange={handleChange} value={name} />
  );
}

export default InputComponent;
