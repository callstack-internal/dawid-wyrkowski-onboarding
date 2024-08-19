import axios from 'axios';
import { weatherApiKey } from '../utils/constants.ts';

const weatherApiBase = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
    params: {
        appid: weatherApiKey,
    },
});

export default weatherApiBase;
