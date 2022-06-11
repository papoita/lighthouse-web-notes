import React from "react";
import { ReactDOM } from "react";
import Search from "./Search";

function App(){
  return(
    <div>
      <h1>
        Weather Search Engine
      </h1>
      <Search />

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);