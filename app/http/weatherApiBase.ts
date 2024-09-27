import { OPEN_WEATHER_MAP_API_KEY } from 'react-native-dotenv';
import axios from 'axios';

const weatherApiBase = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  params: {
    appid: OPEN_WEATHER_MAP_API_KEY
  }
});

export default weatherApiBase;
