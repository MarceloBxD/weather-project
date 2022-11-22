import React, { createContext, useContext, useState } from "react";
const API_KEY = "3f1bbc5874f2b125ae28942e16e03cf3";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [name, setName] = useState("")
  const [tempMax, setTempMax] = useState(undefined)
  const [tempMin, setTempMin] = useState(undefined)
  const [latitude, setLatitude] = useState(undefined)
  const [longitude, setLongitude] = useState(undefined)
  const [windSpeed, setWindSpeed] = useState(undefined)
  const [temperature, setTemperature] = useState(undefined)
  const [country, setCountry] = useState(undefined)

  const getWeatherData = async () => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
    setName(data.name)
    setTempMax(data.main.temp_max)
    setTempMin(data.main.temp_min)
    setWindSpeed(data.wind.speed)
    setTemperature(data.main.temp)
    setCountry(data.sys.country)
  };

  const value = {
    name,
    setName,
    tempMax,
    setTempMax,
    tempMin,
    setTempMin,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    getWeatherData,
    windSpeed,
    setWindSpeed,
    temperature,
    setTemperature,
    country,
    setCountry
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
