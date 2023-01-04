import React from "react";
import * as C from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

export const SearchArea = () => {
  return (
    <C.CitySearchContainer>
      <C.Typography>Search city</C.Typography>
      <Input />
      <Button value="Search" />
    </C.CitySearchContainer>
  );
};
