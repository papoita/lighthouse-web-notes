import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./styles.css";

function App() {
  return (
    <div classNAme="App">
      <h1>React AJAX</h1>
      <Weather city="Sydney" />
      <Weather city="Paris" />
      <Weather city="New York" />
      <Weather city="Bogota" />
      <Weather city="Ottawa" />
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
