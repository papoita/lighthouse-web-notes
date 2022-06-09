import React, { useState } from "react";

export default function Search2() {
  const [city, setCity] = useState("enter a city");

  function handleSubmit() {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function changeCity() {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={changeCity} />

      <input type="submit" value="Search" />
    </form>
  );
}
