import { useApp } from '../contexts/context'
API_KEY = '3f1bbc5874f2b125ae28942e16e03cf3'

const { cityToSearch } = useApp()

const getWeatherData = () => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&units=metric&appid={${API_KEY}&lang=pt_br}`
}