import React from "react";
import * as C from "./styles";
import { Input } from "../../../components/Input/index";
import { Button } from "../../../components/Button";
import locationIcon from "../../../assets/images/location.svg";
import { useApp } from "../../../contexts/context";

export const WeatherContainer = () => {
  const { name, tempMax, tempMin, windSpeed, temperature, country } = useApp();

  return (
    <C.GeralContainer>
      <C.Container>
        <C.LocationData>
          <C.DataCity>
            <C.Img src={locationIcon} />
            <C.CityName>Local: {name} | {country}</C.CityName>
          </C.DataCity>
          <C.TemperatureInMoment>
            Temperatura Atual: {temperature}
          </C.TemperatureInMoment>
          <C.MaxMin>
            <C.Temperature>Max: {tempMax}</C.Temperature>
            <C.Temperature>Min: {tempMin}</C.Temperature>
          </C.MaxMin>
          <C.WindSpeed>WindSpeed: {windSpeed}</C.WindSpeed>
        </C.LocationData>
        <C.CitySearchContainer>
          <C.Typography>Qual cidade você deseja buscar?</C.Typography>
          <Input />
          <Button value="Buscar" />
        </C.CitySearchContainer>
      </C.Container>
    </C.GeralContainer>
  );
};
