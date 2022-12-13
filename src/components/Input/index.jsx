import React from "react";
import * as C from "./styles";
import { useApp } from "../../contexts/context";

export const Input = () => {
  const { setCityName } = useApp();

  return (
    <C.InputArea>
      <C.Input
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Cidade"
      />
    </C.InputArea>
  );
};
