import React, { useState } from "react";

function UseStateHook() {
  const [counter, setCounter] = useState(10);
  const incCount = () => {
    setCounter(counter + 1);
  };

  const [inputvalue, setInputvalue] = useState("Ushh_B");
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputvalue(newValue);
  };
  return (
    <div className="App">
      <h1>USESTATE HOOK</h1>
      <div>
        {counter} <button onClick={incCount}>Increase Number</button>
        <br />
        <input placeholder="Change this name..." onChange={onChange} />
        {inputvalue}
      </div>
    </div>
  );
}

export default UseStateHook;
