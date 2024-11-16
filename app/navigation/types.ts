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
  [RouteNames.WeatherDetails]: {};
};
