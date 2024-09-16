import { OPEN_WEATHER_MAP_API_KEY } from '@env';
import axios from 'axios';

const weatherApiBase = axios.create({
    baseURL: 'https://api.openweathermap.org/',
    params: {
        appid: OPEN_WEATHER_MAP_API_KEY
    }
});

export default weatherApiBase;
