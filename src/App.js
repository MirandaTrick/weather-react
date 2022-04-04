import "./App.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Search defaultCity="London" />
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
    </div>
  );
}

export default App;
