import React from "react";
import Cities from "./Cities";

export default function App(){
  let europeanCities = [
    {
      name: "paris",
      temp: 12,
    },
    {
      name: "Zurich",
      temp: 30,
    }
  ];
  let americanCities = [
    {
      name: "New York",
      temp: 12,
    },
    {
      name: "Ottawa",
      temp: 30,
    }
  ];

  return(
    <div>
      <h1>
        React loops
      </h1>
      <Cities cities={europeanCities}
     />
     <Cities cities={americanCities}
     />
    </div>
  )
}