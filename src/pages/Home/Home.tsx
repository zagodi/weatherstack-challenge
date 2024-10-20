import { useState } from "react";
import { Spin } from "antd";

import InputSearch from "../../components/InputSearch/InputSearch";
import CityWeather from "../../components/CityWeather/CityWeather";

import useGetCurrentWeather from "../../hooks/useGetCurrentWeather/useGetCurrentWeather";

import "./Home.scss";

function Home() {
  const [cityName, setCityName] = useState("");

  const { currentWeather, loading, error, fetchCityCurrentWeather } =
    useGetCurrentWeather({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  const handleClickFetch = () => {
    console.log("TESTE");
    fetchCityCurrentWeather(cityName);
  };

  return (
    <div className="home-container">
      <h1 className="home-page-title">Weatherstack</h1>

      <div className="input-container">
        <InputSearch
          value={cityName}
          onChange={handleChange}
          onClickSearch={handleClickFetch}
        />
      </div>

      {loading && (
        <div className="loading-message">
          <Spin />
          <p>Loading...</p>
        </div>
      )}

      {error && <div>{error}</div>}

      {!!currentWeather && !loading && (
        <CityWeather dataSource={currentWeather} />
      )}
    </div>
  );
}

export default Home;
