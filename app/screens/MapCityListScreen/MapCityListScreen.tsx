import React, { useEffect } from 'react';
import { MapView } from '@rnmapbox/maps';
import { useAppDispatch, useAppSelector } from '@state/hooks.ts';
import { fetchCitiesWeatherInRadiusByLatLngThunk } from '@state/features/weatherCityList/weatherCityListThunks.ts';

// 52.237049, 21.017532

export function MapCityListScreen() {
  const dispatch = useAppDispatch();

  useEffect(function onInit() {
    dispatch(
      fetchCitiesWeatherInRadiusByLatLngThunk({
        lat: 54,
        lon: 22,
        numberOfCities: 20,
        radiusInKm: 10
      })
    );
  }, []);

  const d = useAppSelector((state) => state.weatherCityList);
  console.log(d);

  return (
    <MapView
      style={{
        flex: 1
      }}
    />
  );
}
