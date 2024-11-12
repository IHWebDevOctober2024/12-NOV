import { useState, useEffect } from "react";

function Updating() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 20));
  const [random2, setRandom2] = useState(Math.floor(Math.random() * 20));
  console.log("UPDATING COMPONENT UPDATED");

  useEffect(() => {
    console.log("Console log inside Useefect");
  }, [random2]);

  return (
    <>
      <h1>Updating</h1>
      <p>{random}</p>
      <button onClick={() => setRandom(Math.floor(Math.random() * 20))}>
        New number
      </button>
      <p>{random2}</p>
      <button onClick={() => setRandom2(Math.floor(Math.random() * 20))}>
        New number 2
      </button>
    </>
  );
}

export default Updating;
