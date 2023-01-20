import "./App.css";

import { useEmail } from "./context/EmailContext";

import { Filter } from "./components/Filter";

import { Homepage } from "./components/Homepage";
import { Pageno } from "./components/Pageno";

function App() {
  const data = useEmail();
  console.log(data);
  return (
    <div className="mainContainer">
      <Filter />
      <Homepage />
      <Pageno />
    </div>
  );
}

export default App;
