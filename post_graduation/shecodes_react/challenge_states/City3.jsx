import React, { useState } from "react";

export default function City2(props) {
  //const { temperature, name } = props;

  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("Metric");
  function clickFahrenheit(event) {
    event.preventDefault();
    setUnit("Imperial");
    setTemperature(Math.round(props.temperature * 1.8 + 32));
    //alert(`${props.name} is ${Math.round(temperature)} F`);
  }

  function clickCelsius(event) {
    event.preventDefault();
    setUnit("Metric");
    setTemperature(props.temperature);
    //alert(`${props.name} is ${Math.round(temperature)} F`);
  }

  return (
    <div className="City">
      It is {temperature} ({unit})
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
