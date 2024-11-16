import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { WeatherItem } from '@http/types.ts';
import { fetchCitiesWeatherInRadiusByLatLngThunk } from '@state/features/weatherCityList/weatherCityListThunks.ts';

export interface WeatherCityListSliceState {
  entities: Record<string, WeatherItem>;
  isLoading: boolean;
}

export const weatherCityListAdapter = createEntityAdapter({
  selectId: (item: WeatherItem) => item.id,
  sortComparer: (a: WeatherItem, b: WeatherItem) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
});

const weatherCityListSlice = createSlice({
  name: 'weatherCityList',
  initialState:
    weatherCityListAdapter.getInitialState<WeatherCityListSliceState>({
      isLoading: false,
      entities: {}
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCitiesWeatherInRadiusByLatLngThunk.fulfilled,
      (state, action) => {
        weatherCityListAdapter.addMany(state, action.payload.list);
      }
    );
  }
});

export const weatherCityListReducer = weatherCityListSlice.reducer;
