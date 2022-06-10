import React, { useState } from "react";

export default function Search2() {
  const [city, setCity] = useState("enter a city");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="type a query" autoFocus={true} autoComplete={false} onChange={changeCity} />

      <input type="submit" value="Search" />
    </form>
  );
}
