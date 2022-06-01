import React from "react"

function Weather(props) {

}
function fahrenheitTemperature(){
let temperature = (props.temperature * 9 ) / 5 +32;
return Math.round(temperature);
} 

return(
  <p>
  The weather in  {poprs.city} is {props.temperature} C and {""}{fanherheitTemperature()}F
  </p>
)
}

export default Weather;

