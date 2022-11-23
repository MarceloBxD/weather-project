import React from "react";
import * as C from "./styles";
import { Input } from "../../../components/Input/index";
import { Button } from "../../../components/Button";
import locationIcon from "../../../assets/images/location.svg";
import { useApp } from "../../../contexts/context";
import windSpeedIcon from "../../../assets/images/wind.png";
import shiningSunImg from '../../../assets/images/shiningSun.png'
import trovaoImg from '../../../assets/images/trovao.png'

export const WeatherContainer = () => {
  const {
    name,
    tempMax,
    tempMin,
    windSpeed,
    temperature,
    description,
    kelvin_to_celsius,
  } = useApp();

  return (
    <C.GeralContainer>
      <C.CitySearchContainer>
        <C.Typography>Qual cidade você deseja buscar?</C.Typography>
        <Input />
        <Button value="Buscar" />
      </C.CitySearchContainer>
      <C.Container>
        <C.LocationData>
          <C.DataCity>
            {/* <C.Img src={locationIcon} /> */}
            <C.CloudImg src={kelvin_to_celsius(temperature) >= 20 ? shiningSunImg : trovaoImg}/>
            <C.CityName>Local: {name}</C.CityName>
            <C.TemperatureInMoment>
              {kelvin_to_celsius(temperature)}º
            </C.TemperatureInMoment>
            <C.Temperature>{description}</C.Temperature>
            <C.MaxMin>
              <C.Temperature>Max: {kelvin_to_celsius(tempMax)}</C.Temperature>
              <C.Temperature>Min: {kelvin_to_celsius(tempMin)}</C.Temperature>
            </C.MaxMin>
            <C.WindSpeed>
                <C.Img src={windSpeedIcon} />
                {windSpeed}
              </C.WindSpeed>
          </C.DataCity>
        </C.LocationData>
      </C.Container>
    </C.GeralContainer>
  );
};
