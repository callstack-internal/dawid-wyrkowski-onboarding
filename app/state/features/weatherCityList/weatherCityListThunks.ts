import { createAsyncThunk } from '@reduxjs/toolkit';
import WeatherApi from '@http/WeatherApi.ts';

type FetchCitiesInRadiusByLatLngProps = Parameters<
  typeof WeatherApi.findCitiesWeatherInRadiusByLatLng
>[0];

export const fetchCitiesWeatherInRadiusByLatLngThunk = createAsyncThunk(
  'weatherCityList/fetchCitiesInRadiusByLatLng',
  async (args: FetchCitiesInRadiusByLatLngProps) => {
    const response = await WeatherApi.findCitiesWeatherInRadiusByLatLng(args);

    return response.data;
  }
);
