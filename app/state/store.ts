import { configureStore } from '@reduxjs/toolkit';
import { weatherCityListReducer } from '@state/features/weatherCityList/weatherCityListSlice.ts';

export const store = configureStore({
  reducer: {
    weatherCityList: weatherCityListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
