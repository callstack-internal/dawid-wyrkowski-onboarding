import React from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';

import { mapCityListScreenStyles } from '@screens/MapCityListScreen/mapCityListScreenStyles.ts';
import { useAppSelector } from '@state/hooks.ts';
import { weatherCityListSelector } from '@state/features/weatherCityList/weatherCityListSelectors.ts';
import { MapCityListItem } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListItem/MapCityListItem.tsx';

// const snapPoints = [];
// initialWindowMetrics

export function MapCityListBottomSheet() {
  const cities = useAppSelector(weatherCityListSelector);
  console.log(cities);

  return (
    <BottomSheet snapPoints={['20%', '50%', '90%']}>
      <BottomSheetView style={mapCityListScreenStyles.contentContainer}>
        <FlatList data={cities} renderItem={MapCityListItem} />
      </BottomSheetView>
    </BottomSheet>
  );
}
