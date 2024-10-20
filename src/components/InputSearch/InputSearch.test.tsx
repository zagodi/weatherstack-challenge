import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import InputSearch from "./InputSearch";

describe("<InputSearch />", () => {
  const mockOnChange = jest.fn();
  const mockOnClickSearch = jest.fn();

  it("should render the input and button correctly", () => {
    render(
      <InputSearch
        value=""
        onChange={mockOnChange}
        onClickSearch={mockOnClickSearch}
      />
    );

    expect(
      screen.getByPlaceholderText("Type the city name")
    ).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Search" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should call onChange when input value changes", () => {
    render(
      <InputSearch
        value=""
        onChange={mockOnChange}
        onClickSearch={mockOnClickSearch}
      />
    );

    const input = screen.getByPlaceholderText("Type the city name");

    fireEvent.change(input, { target: { value: "New York" } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("should enable the button when input has value and call onClickSearch when button is clicked", () => {
    render(
      <InputSearch
        value="New York"
        onChange={mockOnChange}
        onClickSearch={mockOnClickSearch}
      />
    );

    const button = screen.getByRole("button", { name: "Search" });

    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(mockOnClickSearch).toHaveBeenCalled();
  });

  it("should call onClickSearch when enter is pressed", () => {
    render(
      <InputSearch
        value="New York"
        onChange={mockOnChange}
        onClickSearch={mockOnClickSearch}
      />
    );

    const input = screen.getByPlaceholderText("Type the city name");

    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(mockOnClickSearch).toHaveBeenCalled();
  });

  it("should match the snapshot", () => {
    const { container } = render(
      <InputSearch
        value=""
        onChange={mockOnChange}
        onClickSearch={mockOnClickSearch}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
