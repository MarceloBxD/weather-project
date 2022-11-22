import React from "react";
import * as C from "./styles";
import { Input } from "../../../components/Input/index";
import { Button } from "../../../components/Button";
import locationIcon from "../../../assets/images/location.svg";

export const WeatherContainer = () => {
  return (
    <C.GeralContainer>
      <C.Container>
        <C.LocationData>
          <C.Img src={locationIcon} />
          <C.CityName>Rio de Janeiro</C.CityName>
        </C.LocationData>
        <C.CitySearchContainer>
        <C.Typography>Qual cidade você deseja buscar?</C.Typography>
        <Input />
        <Button value="Procurar" />
        </C.CitySearchContainer>
      </C.Container>
    </C.GeralContainer>
  );
};
