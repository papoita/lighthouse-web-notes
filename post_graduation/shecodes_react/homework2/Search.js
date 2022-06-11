import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is 19 degrees in ${city}`);
  }

  function changeOutput(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city"
        autoFocus={true}
        onChange={changeOutput}
      />

      <input type="submit" value="Search" />
    </form>
    <h2>
     {message}
    </h2>
    </div>
  );
}
