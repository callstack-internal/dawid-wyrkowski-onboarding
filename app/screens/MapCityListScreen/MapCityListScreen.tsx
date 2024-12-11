import React, { useCallback, useEffect, useRef } from 'react';
import { MapView, Camera } from '@rnmapbox/maps';

import { useAppDispatch } from '@state/hooks.ts';
import { fetchCitiesWeatherInRadiusByLatLngThunk } from '@state/features/weatherCityList/weatherCityListThunks.ts';
import { mapCityListScreenStyles } from '@screens/MapCityListScreen/mapCityListScreenStyles.ts';
import { MapCityListBottomSheet } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListBottomSheet.tsx';
import {
  FallbackBounds,
  FallbackLatLng
} from '@screens/MapCityListScreen/constants.ts';

export function MapCityListScreen() {
  const cameraRef = useRef<Camera>(null);
  const dispatch = useAppDispatch();
  const isCameraInit = useRef(false);

  useEffect(function onInit() {
    dispatch(
      fetchCitiesWeatherInRadiusByLatLngThunk({
        lat: FallbackLatLng.lat,
        lon: FallbackLatLng.lng,
        numberOfCities: 50,
        radiusInKm: 150
      })
    );
  }, []);

  const onCameraChanged = useCallback(() => {
    if (isCameraInit.current) {
      return;
    }

    isCameraInit.current = true;
    cameraRef.current?.fitBounds(FallbackBounds.ne, FallbackBounds.sw, 20, 10);
  }, []);

  return (
    <MapView
      attributionEnabled={false}
      style={mapCityListScreenStyles.map}
      onCameraChanged={onCameraChanged}
    >
      <Camera ref={cameraRef} />
      <MapCityListBottomSheet />
    </MapView>
  );
}
