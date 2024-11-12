import { useState, useEffect } from "react";

function Mounting() {
  const [countDown, setCountDown] = useState(1000);

  // console.log("The component is updated");

  /* setInterval(() => {
    console.log("We create an interval");
    
    setCountDown(countDown -1);
  }, 1000); */

  useEffect(() => {
    // Tis is triggered only  when the component is mounted
    // console.log("We create an interval");
    setInterval(() => {
      setCountDown((previousValue) => previousValue - 1);
    }, 1000);
  }, []); // if we add an empty array it runs the inner code only once

  return (
    <>
      <h1>Mounting component</h1>
      <h2>{countDown}</h2>
    </>
  );
}

export default Mounting;
