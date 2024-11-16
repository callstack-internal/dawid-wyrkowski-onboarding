/**
 * return full uri of weatherApi icon
 * @param iconName - name of icon from weatherApi
 */
export const getWeatherIconUri = (iconName: string) =>
  `https://openweathermap.org/img/w/${iconName}.png`;
