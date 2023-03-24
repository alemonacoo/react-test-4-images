import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./style/App.css";

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div className="App">
      <Header title="React Test 4 - Images" />
      <SearchBar />
    </div>
  );
}

export default App;
