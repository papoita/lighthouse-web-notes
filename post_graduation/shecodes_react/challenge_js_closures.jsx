import React from "react";

function Weather(props) {
  function fahrenheitTemperature(celsius) {
    let Ftemperature = (celsius * 9) / 5 + 32;
    let roundedFahrenheit = Math.round(Ftemperature);
    return roundedFahrenheit;
  }
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and{" "}
      {fahrenheitTemperature(props.temperature)}°F
    </div>
  );
}
export default Weather;