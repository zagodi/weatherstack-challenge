import React from "react";

import { useMemo } from "react";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

import { CURRENT_WEATHER_RESPONSE } from "../../hooks/useGetCurrentWeather/useGetCurrentWeather";

import "./CityWeather.scss";

type PROPS = {
  dataSource: CURRENT_WEATHER_RESPONSE;
};

const CityWeather = ({ dataSource }: PROPS) => {
  const items: DescriptionsProps["items"] = useMemo(
    () => [
      {
        label: "City",
        children: dataSource.location.name,
        key: "name",
        labelStyle: { fontWeight: "bold" },
      },
      {
        label: "Country",
        children: dataSource.location.country,
        key: "age",
        labelStyle: { fontWeight: "bold" },
      },
      {
        label: "Temperature",
        children: dataSource.current.temperature,
        key: "temperature",
        labelStyle: { fontWeight: "bold" },
      },
      {
        label: "Weather Description",
        children: dataSource.current.weather_descriptions.join(", "),
        key: "weather_descriptions",
        labelStyle: { fontWeight: "bold" },
      },
      {
        label: "Wind Speed",
        children: dataSource.current.wind_speed,
        key: "wind_speed",
        labelStyle: { fontWeight: "bold" },
      },
      {
        label: "Humidity",
        children: dataSource.current.humidity,
        key: "humidity",
        labelStyle: { fontWeight: "bold" },
      },
      {
        label: "UV Index",
        children: dataSource.current.uv_index,
        key: "uv_index",
        labelStyle: { fontWeight: "bold" },
      },
      {
        label: "Precip",
        children: dataSource.current.precip,
        key: "precip",
        labelStyle: { fontWeight: "bold" },
      },
      {
        label: "Pressure",
        children: dataSource.current.pressure,
        key: "pressure",
        labelStyle: { fontWeight: "bold" },
      },
    ],
    []
  );

  return (
    <div className="city-weather-container">
      <Descriptions
        title="Weather Info"
        bordered
        layout="vertical"
        items={items}
      />
    </div>
  );
};

export default CityWeather;
