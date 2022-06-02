import React from "react";

function Weather(props) {
  function fahrenheitTemperature() {
    let Ftemperature = (props.temperature * 9) / 5 + 32;
    let roundedFahrenheit = Math.round(Ftemperature);
    return roundedFahrenheit;
  }
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and{" "}
      {fahrenheitTemperature()}°F
    </div>
  );
}
export default Weather;