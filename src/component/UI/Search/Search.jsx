import { useState } from "react";

import { BsSearch } from "react-icons/bs";

import "./Search.scss";

const Search = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const [inputValue, setValue] = useState(
    searchParams?.get("query")?.toString() || ""
  );

  const handleChange = (event) => {
    const inputValue = event.target.value;

    setValue(inputValue);
    handleSearch(inputValue);
  };

  const handleSearch = (newValue) => {
    if (newValue) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("query", newValue);
      window.history.pushState(null, "", `?${params.toString()}`);

      return;
    }

    if (!newValue) return window.history.pushState(null, "", `/`);
  };

  return (
    <div className="search mobile-menu__item">
      <input
        type="text"
        className="search__input"
        placeholder="Search your trip"
        value={inputValue ?? ""}
        onChange={handleChange}
      />
      <div className="search__icon">
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
