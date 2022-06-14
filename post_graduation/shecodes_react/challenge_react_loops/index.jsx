import React from "react";
import ReactDOM from "react-dom";
import BalticCountries from "./BalticCountries";
import Countries from "./Countries";
import Cities from "./Cities";

import "./styles.css";

function App() {
  let countries = ["France", "USA", "Australia", "Japan"];
  let cities = [
    { capital: "Paris", country: "France" },
    { capital: "NEw York", country: "USA" },
    { capital: "Melbourne", country: "Australia" },
    { capital: "Tokyo", country: "Japan" }
  ];
  return (
    <div className="App">
      <h1>React Loops</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new Component called BalticCountries and list the 3 baltic
        countries (Estonia, Latvia, Lithuania) without using loops or variables.
        Include the component below.
      </p>
      <BalticCountries />
      <h3>Challenge 2</h3>
      <p>
        Include a component called Countries below and send the variable
        countries (created above) as a property. Create a new component called
        Countries and list all countries from the Countries component using a
        loop.
      </p>
      <Countries countries={countries} />
      <h3>Challenge 3</h3>
      <p>
        Modify the countries variable in the code above so it includes the
        country name but also the capital city of each country. Display each
        country and capital city in the Countries component
      </p>
      <Cities cities={cities} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
