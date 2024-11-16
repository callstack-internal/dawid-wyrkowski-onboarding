import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  StaticParamList
} from '@react-navigation/native';
import { MapCityListScreen } from '@screens/MapCityListScreen/MapCityListScreen.tsx';
import { WeatherDetailsScreen } from '@screens/WeatherDetailsScreen/WeatherDetailsScreen.tsx';
import { RootStackParamList, RouteNames } from '@navigation/types.ts';

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

type RootStackStaticParamList = StaticParamList<typeof RootStack>;

/**
 * Override static props for navigation purposes
 * useNavigation use it for checking possible routes
 */
declare global {
  // eslint-disable-next-line no-unused-vars
  namespace ReactNavigation {
    // eslint-disable-next-line no-unused-vars
    interface RootParamList extends RootStackStaticParamList {}
  }
}

export const MainRouterNavigation = createStaticNavigation(RootStack);
