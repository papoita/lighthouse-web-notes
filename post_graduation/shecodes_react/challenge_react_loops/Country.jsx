import React from "react";

export default function Country (props){
  return (
    <div>
      <li key={index}> It is 30 degrees in {props.country.name}</li>;
    </div>
  )
}