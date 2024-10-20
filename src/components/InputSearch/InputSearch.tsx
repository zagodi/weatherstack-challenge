import React from "react";

import { Button, Input } from "antd";

import "./InputSearch.scss";

type PROPS = {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
};

const InputSearch = ({ onChange, value, onClickSearch }: PROPS) => {
  const handleEnter = () => {
    console.log("OI");
    if (!!value) {
      console.log("KKK");
      onClickSearch();
    }
  };

  return (
    <div className="input-search-container">
      <Input
        value={value}
        onChange={onChange}
        onPressEnter={handleEnter}
        placeholder="Type the city name"
      />

      <Button type="primary" onClick={onClickSearch} disabled={!value}>
        Search
      </Button>
    </div>
  );
};

export default InputSearch;
