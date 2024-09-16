const normalizeCityName = (name: string) => {
    return name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
};

export const getUniqueCities = (cities: WeatherItem[]): WeatherItem[] => {
    return cities.filter((city, index, self) => {
        const normalizedName = normalizeCityName(city.name);
        return index === self.findIndex((c) => normalizeCityName(c.name) === normalizedName);
    });
};


