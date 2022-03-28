import React, { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  });

  return (
    <div>
      <h1>USELAYOUTEFFECT</h1>
      <input
        ref={inputRef}
        value="USHH_B"
        readOnly
        style={{ width: 400, height: 70 }}
      />
    </div>
  );
}

export default UseLayoutEffect;
