import React from "react";
import ReactDOM from "react-dom";
import City1 from "./City1";
import City2 from "./City2";
import City3 from "./City3";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React State</h1>

        <h3>Challenge 1</h3>
        <p>
          Alert temperature in "Fahrenheiht" when clicking on Fahrenheiht
          <br />
          <small>Formula: temperature * (9 / 5) + 32)</small>
        </p>

        <City1 name="Lisbon" temperature={12} />
        <City1 name="Berlin" temperature={23} />
        <City1 name="Dallas" temperature={34} />
        <City1 name="New York" temperature={-2} />
        <City1 name="Milan" temperature={10} />
        <hr />

        <h3>Challenge 2</h3>
        <p>
          Create a state called temperature with the celsius temperature by
          default. Change the temperature state when clicking on °F to the
          Fahrenheiht value.
        </p>

        <City2 name="Lisbon" temperature={12} />
        <City2 name="Berlin" temperature={23} />
        <City2 name="Dallas" temperature={34} />
        <City2 name="New York" temperature={-2} />
        <City2 name="Milan" temperature={10} />
        <hr />

        <h3>Challenge 3</h3>
        <p>
          Make the user interface work. When I click on °F, show the temperature
          in imperial and when clicking °C, show the temperature in celsius.
        </p>

        <City3 name="Lisbon" temperature={12} />
        <City3 name="Berlin" temperature={23} />
        <City3 name="Dallas" temperature={34} />
        <City3 name="New York" temperature={-2} />
        <City3 name="Milan" temperature={10} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
