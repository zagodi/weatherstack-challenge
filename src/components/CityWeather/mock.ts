import { CURRENT_WEATHER_RESPONSE } from "../../hooks/useGetCurrentWeather/useGetCurrentWeather";

const mockDataSource: CURRENT_WEATHER_RESPONSE = {
  request: {
    type: "City",
    query: "New York, United States of America",
    language: "en",
    unit: "m",
  },
  location: {
    name: "New York",
    country: "United States of America",
    region: "New York",
    lat: "40.714",
    lon: "-74.006",
    timezone_id: "America/New_York",
    localtime: "2024-10-20 16:35",
    localtime_epoch: 1729442100,
    utc_offset: "-4.0",
  },
  current: {
    observation_time: "08:35 PM",
    temperature: 24,
    weather_code: 116,
    weather_icons: [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
    ],
    weather_descriptions: ["Partly cloudy"],
    wind_speed: 9,
    wind_degree: 230,
    wind_dir: "SW",
    pressure: 1024,
    precip: 0,
    humidity: 22,
    cloudcover: 25,
    feelslike: 24,
    uv_index: 1,
    visibility: 16,
  },
};

export default mockDataSource;
