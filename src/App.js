import "./App.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather Search Engine</p>

        <Search />
      </header>
      <footer>
        {" "}
        <a
          href="https://github.com/MirandaTrick/weather-react.git"
          target="blank"
        >
          Open Source Coded{" "}
        </a>
        by Miranda Trick
      </footer>
      ;
    </div>
  );
}

export default App;
