import React from "react";
import * as C from "./styles";
import { useApp } from "../../contexts/context";


export const Button = ({ value }) => {

  const { getWeatherData } = useApp()



  return <C.Button onClick={getWeatherData}>{value}</C.Button>;
};
