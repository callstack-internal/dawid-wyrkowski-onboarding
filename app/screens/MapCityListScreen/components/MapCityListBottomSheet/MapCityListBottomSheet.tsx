import React, { useCallback, useContext, useMemo } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';

import { mapCityListScreenStyles } from '@screens/MapCityListScreen/mapCityListScreenStyles.ts';
import { useAppSelector } from '@state/hooks.ts';
import { weatherCityListSelector } from '@state/features/weatherCityList/weatherCityListSelectors.ts';
import { MapCityListItem } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListItem/MapCityListItem.tsx';
import type { ListRenderItem } from '@react-native/virtualized-lists';
import { WeatherItem } from '@http/types.ts';
import { AccessibilityInfoContext } from '@contexts/AccessibilityInfoContext.tsx';

const keyExtractor = (item: WeatherItem) => String(item.id);

export function MapCityListBottomSheet() {
  const cities = useAppSelector(weatherCityListSelector);
  const { isScreenReaderEnabled } = useContext(AccessibilityInfoContext);

  const handleComponent = useMemo(
    () => (isScreenReaderEnabled ? () => null : undefined),
    [isScreenReaderEnabled]
  );

  const snapPoints = useMemo(
    () => (isScreenReaderEnabled ? ['95%'] : ['20%', '50%', '90%']),
    [isScreenReaderEnabled]
  );

  const renderItem: ListRenderItem<WeatherItem> = useCallback(
    ({ ...info }) => <MapCityListItem {...info} />,
    []
  );

  return (
    <BottomSheet
      accessible={false}
      snapPoints={snapPoints}
      handleComponent={handleComponent}
    >
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
