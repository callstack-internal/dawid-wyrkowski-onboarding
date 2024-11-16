import React, { useCallback } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';

import { mapCityListScreenStyles } from '@screens/MapCityListScreen/mapCityListScreenStyles.ts';
import { useAppSelector } from '@state/hooks.ts';
import { weatherCityListSelector } from '@state/features/weatherCityList/weatherCityListSelectors.ts';
import { MapCityListItem } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListItem/MapCityListItem.tsx';
import type { ListRenderItem } from '@react-native/virtualized-lists';
import { WeatherItem } from '@http/types.ts';

const keyExtractor = (item: WeatherItem) => String(item.id);

export function MapCityListBottomSheet() {
  const cities = useAppSelector(weatherCityListSelector);

  const renderItem: ListRenderItem<WeatherItem> = useCallback(
    ({ ...info }) => <MapCityListItem {...info} />,
    []
  );

  return (
    <BottomSheet snapPoints={['20%', '50%', '90%']}>
      <BottomSheetView style={mapCityListScreenStyles.contentContainer}>
        <FlatList
          data={cities}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </BottomSheetView>
    </BottomSheet>
  );
}
