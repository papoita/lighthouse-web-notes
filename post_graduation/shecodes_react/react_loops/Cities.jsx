import React from "react";

export default function Cities() {
  let cities = ["Paris", "Tokyo", "Ottawa"];

  return (
    <div className="Cities">
      <ul>
        {cities.map(function (city, index) {
          return <li key={index}>{city}</li>;
        })}
      </ul>
    </div>
  );
}

/// using arrow functions
import React from "react";

export default function Cities() {
  let cities = ["Paris", "Tokyo", "Ottawa"];

  return (
    <div className="Cities">
      <ul>
        {cities.map((city, index)=>{
          return <li key={index}>{city}</li>;
        })}
      </ul>
    </div>
  );
}
////array of objects

import React from "react";

export default function Cities() {
  let cities = [
    {
      name: "paris",
      temp: 12,
    },
    {
      name: "tokyo",
      temp: 30,
    }
  ]

  return (
    <div className="Cities">
      <ul>
        {cities.map((city, index)=>{
          return <li key={index}>It is{city.temp} degrees in <strong>{city.name}</strong></li>;
        })}
      </ul>
    </div>
  );
}
////With props being sent from index.js
import React from "react";

export default function Cities(props) {


  return (
    <div className="Cities">
      <ul>
        {props.cities.map((city, index)=>{
          return <li key={index}>It is{city.temp} degrees in <strong>{city.name}</strong></li>;
        })}
      </ul>
    </div>
  );
}