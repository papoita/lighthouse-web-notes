import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Hello2 from "./Hello2";
import Hello3 from "./Hello3";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Conditional Rendering</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new Component Hello return a h2 with the word "Hello" in it.
        Include the component here.
      </p>
      <Hello />
      <h3>Challenge 2</h3>
      <p>
        Send a property language and the component should render "Bonjour" if
        language is french and "Hello" in other cases. Include the component
        here for English and French
      </p>
      <Hello2 language="french" />
      <Hello2 language="italian" />

      <h3>Challenge 3</h3>
      <p>
        Add the ability for the component to render "Hola" for Spanish. Include
        the component here for Spanish
      </p>
      <Hello3 language="spanish" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
