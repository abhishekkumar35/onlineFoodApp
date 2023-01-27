import React, { useState } from "react";

function Search(props) {
  const [inputTxt, setInputTxt] = useState("");

  const restaurants = props.restaurants;

  return (
    <div className="search__card">
      <input
        type="search"
        className="search__input"
        onChange={(e) => {
          setInputTxt(e.target.value);
          if (e.target.value === "") {
            props.setFilteredData(restaurants, inputTxt);
          }
        }}
        value={inputTxt}
      />
      <button
        className="search__btn"
        type="search"
        onClick={() => {
          props.setFilteredData(restaurants, inputTxt);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
