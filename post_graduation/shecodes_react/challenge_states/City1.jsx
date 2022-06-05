import React from "react";

export default function City1(props) {
  const { temperature, name } = props;

  function changeTemperature(temperature) {
    //event.preventDefault();
    let fTemp = temperature * 1.8 + 32;
    return fTemp;
  }

  function clickFahrenheit(event) {
    event.preventDefault();
    let fahrenheit = changeTemperature(temperature);
    alert(`${name} is ${fahrenheit} F`);
  }

  return (
    <div className="City">
      It is {temperature} °C |{" "}
      <a href="/" onClick={clickFahrenheit}>
        °F{" "}
      </a>{" "}
      in {name}
    </div>
  );
}
