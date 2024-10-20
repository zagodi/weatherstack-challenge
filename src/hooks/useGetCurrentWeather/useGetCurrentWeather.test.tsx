import React from "react";

import { render, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import "@testing-library/jest-dom";

import api from "../../api/axiosConfig";
import useGetCurrentWeather from "./useGetCurrentWeather";

import { API_KEY } from "../../configs/environment";

const ExampleComponent = ({ cityName }: { cityName?: string }) => {
  const { currentWeather, loading, error } = useGetCurrentWeather({ cityName });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (currentWeather) return <div>{currentWeather.location.name}</div>;
  return null;
};

describe("useGetCurrentWeather", () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(api);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("should fetch and display current weather data successfully", async () => {
    const mockResponse = {
      request: { type: "City", query: "New York" },
      location: { name: "New York", country: "US" },
      current: { temperature: 20, weather_descriptions: ["Sunny"] },
    };

    mockAxios
      .onGet(`/current?access_key=${API_KEY}`, {
        params: { query: "New York" },
      })
      .reply(200, mockResponse);

    const { getByText } = render(<ExampleComponent cityName="New York" />);

    expect(getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => expect(getByText("New York")).toBeInTheDocument());
  });

  it("should handle network error", async () => {
    mockAxios
      .onGet(`/current?access_key=${API_KEY}`, {
        params: { query: "New York" },
      })
      .networkError();

    const { getByText } = render(<ExampleComponent cityName="New York" />);

    expect(getByText("Loading...")).toBeInTheDocument();

    await waitFor(() =>
      expect(getByText("Error fetching: Network Error")).toBeInTheDocument()
    );
  });
});
