import weatherApiBase from './weatherApiBase.ts';

class WeatherApi {
    findCitiesWeatherInRadiusByLatLng(lat: number, lng: number, numberOfCities: number, radiusInKm: number) {
        return weatherApiBase.get(`find?lat=${lat}&lon=${lng}&cnt=${numberOfCities}&radius=${radiusInKm}`);
    }
}

export default new WeatherApi();
