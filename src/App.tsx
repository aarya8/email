import "./App.css";
import React from "react";

import { Filter } from "./components/Filter";

import { Homepage } from "./components/Homepage";
import { Pageno } from "./components/Pageno";

function App() {
  return (
    <div className="mainContainer">
      <Filter />
      <Homepage />
      <Pageno />
    </div>
  );
}

export default App;
