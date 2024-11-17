import React, { useMemo } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { RootStackParamList, RouteNames } from '@navigation/MainRouter.tsx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { weatherCityListEntitySelectors } from '@state/features/weatherCityList/weatherCityListSelectors.ts';
import { useAppSelector } from '@state/hooks.ts';
import { weatherDetailsScreensStyles } from '@screens/WeatherDetailsScreen/weatherDetailsScreensStyles.ts';
import { getWeatherIconUri } from '@screens/MapCityListScreen/components/MapCityListBottomSheet/MapCityListItem/utils/getWeatherIconUri.ts';

export function WeatherDetailsScreen({
  route: {
    params: { cityEntityId }
  }
}: NativeStackScreenProps<RootStackParamList, RouteNames.WeatherDetails>) {
  const {
    clouds,
    name,
    weather: [{ description, icon }],
    main: {
      feels_like,
      grnd_level,
      humidity,
      pressure,
      sea_level,
      temp,
      temp_min,
      temp_max
    },
    wind: { deg: windDeg, speed: windSpeed },
    sys: { country }
  } = useAppSelector((state) =>
    weatherCityListEntitySelectors.selectById(state, cityEntityId)
  );

  const table = useMemo(
    () => [
      {
        name: 'Feels Like',
        value: `${feels_like} °C`
      },
      {
        name: 'Ground Level Pressure',
        value: `${grnd_level} hPa`
      },
      {
        name: 'Humidity',
        value: `${humidity} %`
      },
      {
        name: 'Pressure',
        value: `${pressure} hPa`
      },
      {
        name: 'Sea Level Pressure',
        value: `${sea_level} hPa`
      },
      {
        name: 'Temperature',
        value: `${temp} °C`
      },
      {
        name: 'Maximum Temperature',
        value: `${temp_max} °C`
      },
      {
        name: 'Minimum Temperature',
        value: `${temp_min} °C`
      },
      {
        name: 'Wind Direction',
        value: `${windDeg} °`
      },
      {
        name: 'Wind Speed',
        value: `${windSpeed} m/s`
      },
      {
        name: 'Country',
        value: `${country}`
      },
      {
        name: 'Cloudiness',
        value: `${clouds.all || clouds.today} %`
      }
    ],
    []
  );

  const source = useMemo(() => ({ uri: getWeatherIconUri(icon) }), [icon]);

  return (
    <View style={weatherDetailsScreensStyles.container}>
      <View style={weatherDetailsScreensStyles.titleContainer}>
        <View>
          <Text style={weatherDetailsScreensStyles.title}>{name}</Text>
          <Text
            style={weatherDetailsScreensStyles.subTitle}
            accessibilityLanguage="EN"
          >
            {description}
          </Text>
        </View>
        <Image style={weatherDetailsScreensStyles.image} source={source} />
      </View>
      <ScrollView>
        {table.map(({ name: rowName, value }) => (
          <View
            style={weatherDetailsScreensStyles.rowNameValue}
            key={rowName + value}
          >
            <Text
              style={weatherDetailsScreensStyles.textValueName}
              accessibilityLanguage="EN"
            >
              {rowName}
            </Text>
            <Text style={weatherDetailsScreensStyles.textValue}>{value}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
