import "../style/SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="SearchBarContainer">
        <input
          value={term}
          onChange={handleInputChange}
          type="text"
          placeholder="search"
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
