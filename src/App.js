import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
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
          Open Source coded{" "}
        </a>
        by Miranda Trick
      </footer>
      ;
    </div>
  );
}

export default App;
