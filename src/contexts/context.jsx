import React, { createContext, useContext, useState } from "react";
const API_KEY = "3f1bbc5874f2b125ae28942e16e03cf3";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState(undefined);
  const [tempMax, setTempMax] = useState(undefined);
  const [tempMin, setTempMin] = useState(undefined);
  const [cityName, setCityName] = useState(undefined)
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);
  const [windSpeed, setWindSpeed] = useState(undefined);

  const getWeatherData = async () => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
    setName(data.name);
    setTempMax(data.main.temp_max);
    setTempMin(data.main.temp_min);
    setWindSpeed(data.wind.speed);
    setTemperature(data.main.temp);
    setDescription(data.weather[0].description);
  };

  const kelvin_to_celsius = (temp_kelvin) => {
    const temp_celsius = temp_kelvin - 273.15 
    const temp = temp_celsius.toFixed(2)
    return temp
  }

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
    description,
    setDescription,
    cityName,
    setCityName,
    kelvin_to_celsius
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
