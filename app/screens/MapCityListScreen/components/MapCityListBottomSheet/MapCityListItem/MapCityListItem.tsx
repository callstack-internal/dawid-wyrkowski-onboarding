import React from 'react';
import { Image, Text, View } from 'react-native';
import type { ListRenderItem } from '@react-native/virtualized-lists';
import { WeatherItem } from '@http/types.ts';
import { mapCityListItemStyles } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListItem/mapCityListItemStyles.ts';
import { getWeatherIconUri } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListItem/utils/getWeatherIconUri.ts';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {}

export const MapCityListItem: ListRenderItem<WeatherItem> = ({
  item,
  index
}) => {
  const {
    name,
    main: { humidity, temp },
    weather: [{ main: weatherType, icon }]
  } = item;

  const source = { uri: getWeatherIconUri(icon) };

  return (
    <TouchableOpacity style={mapCityListItemStyles.container}>
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
        <Text style={mapCityListItemStyles.temp}>{temp}</Text>
      </View>
    </TouchableOpacity>
  );
};
