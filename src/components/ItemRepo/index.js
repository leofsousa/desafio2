/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ItemContainer } from "./styles";

export default function ItemRepo({ repo, handleRemoveRepo }) {
  return (
    <ItemContainer>
      <h3>{repo?.name}</h3>
      <p>{repo?.full_name}</p>
      <a href={repo?.html_url} target="_blank" rel="noreferrer">
        Ver Repositório
      </a>{" "}
      <br />
      <a
        href="#"
        className="remover"
        onClick={(e) => {
          e.preventDefault();
          const confirmar = window.confirm(
            `Tem certeza que deseja remover o repositório ${repo.name}?`
          );
          if (confirmar) {
            handleRemoveRepo(repo.id);
          }
        }}
      >
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}
