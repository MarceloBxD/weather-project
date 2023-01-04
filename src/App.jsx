import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./sections/Header";
import { WeatherContainer } from "./sections/Main/WeatherContainer/index";
import * as C from "./GlobalStyle";

function App() {
  return (
    <>
      <Header />
      <C.Flex>
        <WeatherContainer />
        <GlobalStyle />
      </C.Flex>
    </>
  );
}

export default App;
