import React from "react";
import * as C from "./styles";
import { Input } from "../../../components/Input/index";
import { Button } from "../../../components/Button";
import locationIcon from "../../../assets/images/location.svg";
import { useApp } from "../../../contexts/context";
import windSpeedIcon from "../../../assets/images/wind.png";
import shiningSunImg from "../../../assets/images/shiningSun.png";
import trovaoImg from "../../../assets/images/trovao.png";

export const WeatherContainer = () => {
  const {
    name,
    tempMax,
    tempMin,
    windSpeed,
    temperature,
    description,
    kelvin_to_celsius,
    country,
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
            {name && (
              <C.Data>
                <C.CloudImg
                  src={temperature >= 20 ? shiningSunImg : trovaoImg}
                />
                <C.ImportantData>
                  <C.CityName>Local: {name}</C.CityName>
                  <C.TemperatureInMoment>
                    {kelvin_to_celsius(temperature)}º
                  </C.TemperatureInMoment>
                  <C.Typography>{description}</C.Typography>
                  <C.MaxMin>
                    <C.Temperature>
                      Min: {kelvin_to_celsius(tempMin)}º
                    </C.Temperature>
                    <C.Temperature>
                      Max: {kelvin_to_celsius(tempMax)}º
                    </C.Temperature>
                  </C.MaxMin>
                </C.ImportantData>
                <C.addInfos>
                  <C.Flex>
                    <C.Img src={windSpeedIcon} />
                    {windSpeed}
                  </C.Flex>
                  <C.Flex>Country: {country}</C.Flex>
                </C.addInfos>
              </C.Data>
            )}
          </C.DataCity>
        </C.LocationData>
      </C.Container>
    </C.GeralContainer>
  );
};
