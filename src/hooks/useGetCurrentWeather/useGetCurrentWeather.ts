import { useState, useEffect, useCallback } from "react";

import axios from "axios";

import api from "../../api/axiosConfig";
import { API_KEY } from "../../configs/environment";

import { REQUEST } from "../../entities/Request";
import { LOCATION } from "../../entities/Location";
import { CURRENT_WEATHER } from "../../entities/CurrentWeather";

export type CURRENT_WEATHER_RESPONSE = {
  request: REQUEST;
  location: LOCATION;
  current: CURRENT_WEATHER;
};

type PROPS = {
  cityName?: string;
};

const useGetCurrentWeather = ({ cityName }: PROPS) => {
  const [currentWeather, setCurrentWeather] =
    useState<CURRENT_WEATHER_RESPONSE | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCityCurrentWeather = useCallback(async (city?: string) => {
    setLoading(true);
    setError(null);
    setCurrentWeather(null);

    const options = {
      method: "GET",
      url: `/current?access_key=${API_KEY}`,
      params: {
        query: city,
      },
    };

    try {
      const response = await api.request<CURRENT_WEATHER_RESPONSE>(options);
      setCurrentWeather(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(`Error fetching: ${err.message}`);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (cityName) {
      fetchCityCurrentWeather(cityName);
    }
  }, []);

  return { currentWeather, loading, error, fetchCityCurrentWeather };
};

export default useGetCurrentWeather;
