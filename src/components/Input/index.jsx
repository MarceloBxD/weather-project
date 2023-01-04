import React from "react";
import * as C from "./styles";
import { useApp } from "../../contexts/context";

export const Input = () => {
  const { setCityName, getWeatherData } = useApp();

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      getWeatherData();
    }
  };

  return (
    <C.InputArea>
      <C.Input
        onKeyDown={handleEnter}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Cidade"
      />
    </C.InputArea>
  );
};
