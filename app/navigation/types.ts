export enum RouteNames {
  MapCityList = 'MapCityList',
  WeatherDetails = 'WeatherDetails'
}
/**
 * Add here types for the screens that are passed by navigation
 */
export type RootStackParamList = {
  [RouteNames.MapCityList]: {};
  [RouteNames.WeatherDetails]: {};
};
