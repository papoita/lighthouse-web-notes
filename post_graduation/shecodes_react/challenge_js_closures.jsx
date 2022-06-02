import React from "react";

function Weather(props) {
  function fahrenheitTemperature() {
    let temperature = (props.temperature * 9) / 5 + 32;
    return Math.round(temperature);
  }
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and{" "}
      {fahrenheitTemperature()}°F
    </div>
  );
}
export default Weather;