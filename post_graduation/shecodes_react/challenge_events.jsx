import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <h1>React Events</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new component called Weather which renders a "Current
        Temperature" button. Add the button here.
      </p>

      <Weather />

      <h3>Challenge 2</h3>
      <p>
        When the button is clicked, alert "Coming soon..." Add the button here.
      </p>

      <Weather />

      <h3>Challenge 3</h3>
      <p>
        Create a new component called Forecast which renders a link "See
        forecast". When clicking on it, alert "Forecast feature is not ready
        yet". Include the component here.
      </p>
      <div>
        <Forecast />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


//
import React from "react";

export default function Weather() {
  function btnClick(event) {
    event.preventDefault();
    alert(`coming soon...`);
  }
  return (
    <div>
      <button onClick={btnClick}>Current Temperature</button>
    </div>
  );
}
///
import React from "react";

export default function Forecast() {
  function forecastClick(event) {
    event.preventDefault();
    alert(`Forecast is not ready yet`);
  }
  return (
    <a href="/" onClick={forecastClick}>
      Forecast
    </a>
  );
  }







// https://codesandbox.io/s/react-events-forked-6gvqdn?file=/src/index.js