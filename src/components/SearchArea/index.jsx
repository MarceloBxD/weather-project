import React from "react";
import * as C from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

export const SearchArea = () => {
  return (
    <C.CitySearchContainer>
      <C.Typography>Qual cidade você deseja buscar?</C.Typography>
      <Input />
      <Button value="Buscar" />
    </C.CitySearchContainer>
  );
};
