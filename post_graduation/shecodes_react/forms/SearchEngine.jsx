import React, {useState} from "react";

export default function SearchEngine(){
  let [city, setCity] = useState("");
  function handleSubmit(){
    preventDefault();
    alert( `searching for ${city}`);
  }

  function updateCity(){
    setCity(event.target.value);
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}