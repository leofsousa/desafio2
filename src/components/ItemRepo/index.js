import React from "react";
import { ItemContainer } from "./styles";

export default function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Pablo</h3>
      <p>dio/pablor</p>
      <a href="#">Ver Repositório</a> <br />
      <a href="#" className="remover">Remover</a>
      <hr />
    </ItemContainer>
  );
}
