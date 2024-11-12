import { useEffect } from "react";

function UnMounting() {
  useEffect(() => {
    return () => {
      console.log("This is the unmounting phase");
    };
  }, []);

  return (
    <>
      <h1>Unmounting</h1>
    </>
  );
}

export default UnMounting;
