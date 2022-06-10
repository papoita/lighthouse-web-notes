import React, { useState } from "react";

export default function Search2() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching...`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" />
      <input type="submit" value="Search" />
    </form>
  );
}
