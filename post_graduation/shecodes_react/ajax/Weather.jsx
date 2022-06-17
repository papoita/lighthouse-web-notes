import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from 'react-animated-weather';


export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    //alert(response.data.main.temp);
    setTemperature(response.data.main.temp);
  }

 

  if (temperature) {
    return (
      <>
       <Loader
          type="ThreeDots"
          color="red"
          height={10}
          width={110}
          ariaLabel="three-circles-rotating"
        />
    <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="blue"
        size="112"
        animate="true"
      />
      <p>
        The weather is {props.city} is {Math.round(temperature)}
      </p>
      </>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a5d0107b87d2358462582e10139dd2d&units=metric`;

    axios.get(url).then(showTemperature);

    return <>
    <Loader type="ThreeDots" color="black" height={50} width={50} />;
    <p>Loading temperature for {props.city}...</p>;
    <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="blue"
        size="150"
        animate={true}
      />
      <ReactAnimatedWeather
        icon="SLEET"
        color="black"
        size="112"
        animate={true}
      />
      <ReactAnimatedWeather
        icon="FOG"
        color="orange"
        size="200"
        animate={false}
      />
    </>
  }
}
