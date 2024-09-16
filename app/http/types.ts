interface WeatherResponse {
    cod: number;
    calctime: number;
    cnt: number;
    list: WeatherItem[];
}

interface WeatherItem {
    id: number;
    dt: number;
    name: string;
    coord: Coordinates;
    main: MainWeather;
    visibility: number;
    wind: Wind;
    rain: Rain | null;
    snow: Snow | null;
    clouds: Clouds;
    weather: WeatherDescription[];
}

interface Coordinates {
    Lon: number;
    Lat: number;
}

interface MainWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
}

interface Wind {
    speed: number;
    deg: number;
}

interface Rain {
    [key: string]: number; // e.g., '1h': 0.1
}

interface Snow {
    [key: string]: number; // e.g., '1h': 0.1
}

interface Clouds {
    today: number;
}

interface WeatherDescription {
    id: number;
    main: string;
    description: string;
    icon: string;
}
