import React from "react";

export default function Countries(props) {
  return (
    <div>
      <ul>
        {props.countries.map((country, index) => {
          return <li key={index}> It is 30 degrees in {country}</li>;
        })}
      </ul>
    </div>
  );
}
