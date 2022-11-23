import React from "react";
import * as C from "./styles";
import { Input } from "../../../components/Input/index";
import { Button } from "../../../components/Button";
import locationIcon from "../../../assets/images/location.svg";
import { useApp } from "../../../contexts/context";

export const WeatherContainer = () => {
  const { name, tempMax, tempMin, windSpeed, temperature, description, kelvin_to_celsius } = useApp();

  return (
    <C.GeralContainer>
      <C.Container>
        <C.LocationData>
          <C.DataCity>
            {/* <C.Img src={locationIcon} /> */}
            <C.CloudImg />
            <C.CityName>
              Local: {name}
            </C.CityName>
          <C.TemperatureInMoment>{kelvin_to_celsius(temperature)}º</C.TemperatureInMoment>
          <C.Temperature>{description}</C.Temperature>
          <C.MaxMin>
            <C.Temperature>Max: {kelvin_to_celsius(tempMax)}</C.Temperature>
            <C.Temperature>Min: {kelvin_to_celsius(tempMin)}</C.Temperature>
          </C.MaxMin>
          </C.DataCity>
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
