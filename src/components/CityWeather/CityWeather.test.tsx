import React from "react";

import { screen, render } from "@testing-library/react";

import CityWeather from "./CityWeather";
import mockDataSource from "./mock";

describe("<CityWeather />", () => {
  it("should render component correctly", () => {
    const { getByText, container } = render(
      <CityWeather dataSource={mockDataSource} />
    );

    expect(getByText("City")).toBeInTheDocument();
    expect(getByText("New York")).toBeInTheDocument();
    expect(screen.getAllByRole("cell")).toHaveLength(9);

    expect(container.firstChild).toMatchSnapshot();
  });
});
