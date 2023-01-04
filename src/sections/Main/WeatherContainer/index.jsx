import React from "react";
import * as C from "./styles";

import { SearchArea } from "../../../components/SearchArea";
import { ResultApiArea } from "../../../components/ResultApiArea";

export const WeatherContainer = () => {
  return (
    <C.GeralContainer>
      <SearchArea />
      <ResultApiArea />
    </C.GeralContainer>
  );
};
