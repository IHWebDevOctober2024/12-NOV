import Mounting from "./components/Mounting";
import Updating from "./components/Updating";
import UnMounting from "./components/UnMounting";
import Characters from "./components/Characters";
import "./App.css";
import { useState } from "react";

function App() {
  const [showUnmounting, setShowUnmounting] = useState(true);
  return (
    <>
      <Characters />
      <Mounting />
      <Updating />
      {showUnmounting && <UnMounting />}
      <br />
      <button onClick={() => setShowUnmounting(!showUnmounting)}>
        Toggle unmounting component
      </button>
    </>
  );
}

export default App;
