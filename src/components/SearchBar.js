import "../style/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBarContainer">
      <input type="text" placeholder="search" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
