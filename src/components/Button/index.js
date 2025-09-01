import React from "react";
import { ButtonContainer } from "../Button/styles";

function Button({ onClick }) {
  return <ButtonContainer onClick={onClick}>Buscar</ButtonContainer>;
}

export default Button;
