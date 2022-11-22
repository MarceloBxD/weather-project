import React from "react";
import * as C from "./styles";
import { useApp } from "../../contexts/context";

export const Input = () => {

  const { setLatitude, setLongitude } = useApp()

  return (
    <C.InputArea>
      <C.Input onChange={e => setLatitude(e.target.value)} placeholder="Latitude" />
      <C.Input onChange={e => setLongitude(e.target.value)} placeholder="longitude" />
    </C.InputArea>
  );
};
