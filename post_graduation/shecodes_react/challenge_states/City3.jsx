import React, { useState } from "react";

export default function City2(props) {
  //const { temperature, name } = props;

  let [temperature, setTemperature] = useState(props.temperature);

  function clickFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * 1.8 + 32));
    //alert(`${props.name} is ${Math.round(temperature)} F`);
  }

  function clickCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
    //alert(`${props.name} is ${Math.round(temperature)} F`);
  }

  return (
    <div className="City">
      It is {temperature}{" "}
      <a href="/" onClick={clickCelsius}>
        {" "}
        °C{" "}
      </a>
      |
      <a href="/" onClick={clickFahrenheit}>
        °F{" "}
      </a>{" "}
      in {props.name}
    </div>
  );
}
