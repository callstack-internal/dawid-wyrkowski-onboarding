import React, { useCallback } from 'react';
import { Image, Text, View, ListRenderItemInfo } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { WeatherItem } from '@http/types.ts';
import { mapCityListItemStyles } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListItem/mapCityListItemStyles.ts';
import { getWeatherIconUri } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListItem/utils/getWeatherIconUri.ts';
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '@navigation/types.ts';

export function MapCityListItem({
  item
}: ListRenderItemInfo<WeatherItem>): React.ReactElement {
  const { navigate } = useNavigation();
  const {
    name,
    main: { temp },
    weather: [{ main: weatherType, icon }]
  } = item;

  const source = { uri: getWeatherIconUri(icon) };

  const onItemPress = useCallback(() => {
    navigate(RouteNames.WeatherDetails);
  }, []);

  return (
    <TouchableOpacity
      style={mapCityListItemStyles.container}
      onPress={onItemPress}
    >
      <Image
        source={source}
        resizeMode="cover"
        style={mapCityListItemStyles.image}
      />
      <View>
        <Text style={mapCityListItemStyles.name}>{name}</Text>
        <Text style={mapCityListItemStyles.weatherType}>{weatherType}</Text>
      </View>
      <View style={mapCityListItemStyles.tempContainer}>
        <Text style={mapCityListItemStyles.temp}>{temp}°C</Text>
      </View>
    </TouchableOpacity>
  );
}
