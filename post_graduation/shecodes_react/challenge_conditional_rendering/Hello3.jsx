import React from "react";

export default function Hello2(props) {
  if (props.language === "french") {
    return <h2>Bonjour</h2>;
  } else if (props.language === "spanish") {
    return <h2>Hola</h2>;
  } else {
    return <h2>Hello</h2>;
  }
}
