import { GlobalStyle } from './GlobalStyle'
import { Header } from './sections/Header'
import { WeatherContainer } from './sections/Main/WeatherContainer/index'

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <WeatherContainer/>
    </div>
  )
}

export default App
