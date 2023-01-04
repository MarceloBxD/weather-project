import React from "react";
import { useApp } from "../../contexts/context";
import * as C from "./styles";
import windIcon from "../../../src/assets/images/wind.png";
import shiningImg from "../../../src/assets/images/shiningSun.png";
import stormImg from "../../../src/assets/images/storm.png";
import sunImg from "../../../src/assets/images/sun.png";

export const ResultApiArea = () => {
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
    <C.Container>
      <C.LocationData>
        <C.DataCity>
          {name && (
            <C.Data>
              <C.CloudImg src={temperature >= 28 ? sunImg : shiningImg} />
              <C.ImportantData>
                <C.CityName>Locate: {name}</C.CityName>
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
                  <C.Img src={windIcon} />
                  {windSpeed}
                </C.Flex>
                <C.Flex>Country: {country}</C.Flex>
              </C.addInfos>
            </C.Data>
          )}
        </C.DataCity>
      </C.LocationData>
    </C.Container>
  );
};
