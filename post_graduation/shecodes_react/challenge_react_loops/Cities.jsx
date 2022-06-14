import React from "react";

export default function Cities(props) {
  return (
    <div>
      <ul>
        {props.cities.map((city, index) => {
          return (
            <li key={index}>
              {" "}
              It is x temp in {city.capital}, {city.country}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
