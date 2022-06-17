import React, { useState } from "react";
import axios from "axios";
//const axios = require("axios");

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    //alert(response.data.main.temp);
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a5d0107b87d2358462582e10139dd2d&units=metric`;

  axios.get(url).then(showTemperature);
  
  if (temperature) {
    return (
      <p>
        The weather is {props.city} is {Math.round(temperature)}
      </p>
    );
  } else {
    return <p>Loading temperature for {props.city}...</p>;
  }
}
