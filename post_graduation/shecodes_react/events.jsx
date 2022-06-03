import React from "react";

export default function Weather(props){

  function showFahrenheit(event){
    event.preventDefault();
    let fahrenheitTemperature = (props.temperature * 9) / 5 +32;
    alert(`The temperature in fahnrenheit is ${Math.round(temperature)} F`)
  }
  return(
    <p>
      Weather in  {props.city} is {props.temperature} C |{" "} 
      <a href="/" onClick={showFahrenheit}> F</a>;
    </p>

  )
}