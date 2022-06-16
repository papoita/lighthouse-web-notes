import React from "react";
import Country from "./Country";

export default function Countries(props) {
  return (
    <div>
      <ul>
        {props.countries.map((country, index) => {
          return <Country country ={country}/>
        })}
      </ul>
    </div>
  );
}
