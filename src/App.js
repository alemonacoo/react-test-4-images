import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./style/App.css";
import ImageList from "./components/ImageList";

function App() {
  const handleSubmit = (term) => {
    console.log("search ", term);
  };

  return (
    <div className="App">
      <Header title="React Test 4 - Images" />
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
