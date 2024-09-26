import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { MapCityListScreen } from '@screens/MapCityListScreen/MapCityListScreen.tsx';
import { WeatherDetailsScreen } from '@screens/WeatherDetailsScreen/WeatherDetailsScreen.tsx';

/**
 * Add here types for the screens that are passed by navigation
 */
type RootStackParamList = {
  MapCityList: {};
  WeatherDetails: {};
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    MapCityList: {
      screen: MapCityListScreen,
      options: {
        headerShown: false
      }
    },
    WeatherDetails: WeatherDetailsScreen
  }
});

export const MainRouterNavigation = createStaticNavigation(RootStack);
