import React from "react";
import { ReactDOM } from "react";

function App(){
  return(
    <div>
      <h1>
        React Forms
      </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);