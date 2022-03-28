import React, { useRef } from "react";
import Button from "./button";

function UseImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>USEIMPERATIVEHANDLE</h1>
      <button
        onClick={() => {
          buttonRef.current.changeToggle();
        }}
      >
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default UseImperativeHandle;
