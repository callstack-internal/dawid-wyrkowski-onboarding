import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { MapCityListScreen } from '@screens/MapCityListScreen/MapCityListScreen.tsx';
import { WeatherDetailsScreen } from '@screens/WeatherDetailsScreen/WeatherDetailsScreen.tsx';

/**
 * Vars are used but airbnb config doesnt respect ts - TODO: tweak/fix eslint plugins
 */
export enum RouteNames {
  // eslint-disable-next-line no-unused-vars
  MapCityList = 'MapCityList',
  // eslint-disable-next-line no-unused-vars
  WeatherDetails = 'WeatherDetails'
}
/**
 * Add here types for the screens that are passed by navigation
 */
export type RootStackParamList = {
  [RouteNames.MapCityList]: {};
  [RouteNames.WeatherDetails]: {
    cityEntityId: number;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    [RouteNames.MapCityList]: {
      screen: MapCityListScreen,
      options: {
        headerShown: false
      }
    },
    [RouteNames.WeatherDetails]: WeatherDetailsScreen
  }
});

/**
 * Override static props for navigation purposes
 * useNavigation use it for checking possible routes
 */
declare global {
  // eslint-disable-next-line no-unused-vars
  namespace ReactNavigation {
    // eslint-disable-next-line no-unused-vars
    interface RootParamList extends RootStackParamList {}
  }
}

export const MainRouterNavigation = createStaticNavigation(RootStack);
