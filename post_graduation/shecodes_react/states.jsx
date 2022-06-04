import React, { useState } from "react";

export default function Hello(props) {
  let [name, setName] = useState("Matt");

  return (
    <h1>
      {name}
    </h1>
  );
}
///

export default function Hello(props) {
  let [name, setName] = useState("Matt");
  function updateName() {
    let newName = prompt("What is your name?");
    setName(newName);
  }

  return (
    <>
    <h1>
      {name}
    </h1>
    <button onClick={updateName}>
      Update name
    </button>
    </>
  );
}