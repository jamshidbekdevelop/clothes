import React from "react";
import { Component } from "./styled";

const Text = ({ weight, size, children }) => {
  return (
    <Component weight={weight} size={size}>
      {children}
    </Component>
  );
};

export default Text;
