import weatherApiBase from './weatherApiBase.ts';

class WeatherApi {
    findCitiesWeatherInRadiusByLatLng(lat: number, lon: number, numberOfCities: number, radiusInKm: number) {
        return weatherApiBase.get<WeatherResponse>('data/2.5/find', {
            params: {
                lat,
                lon,
                cnt: numberOfCities,
                radius: radiusInKm,
                cluster: 'yes',
            },
        });
    }
}

export default new WeatherApi();
