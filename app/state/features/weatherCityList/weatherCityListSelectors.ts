import { weatherCityListAdapter } from '@state/features/weatherCityList/weatherCityListSlice.ts';
import { RootState } from '@state/store.ts';
import { createSelector } from '@reduxjs/toolkit';

/**
 * return entity selectors
 */
export const weatherCityListEntitySelectors =
  weatherCityListAdapter.getSelectors<RootState>(
    (state) => state.weatherCityList
  );

/**
 * list of entities instead of object
 * WeatherItem[]
 */
export const weatherCityListSelector = createSelector(
  [
    weatherCityListEntitySelectors.selectIds,
    weatherCityListEntitySelectors.selectEntities
  ],
  (allIds, entities) => allIds.map((id) => entities[id])
);
