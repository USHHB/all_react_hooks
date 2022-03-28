import React, { useState } from "react";
import "./App.css";
import UseContext from "./components/usecontext/usecontext";
import UseEffect from "./components/useeffect";
import UseImperativeHandle from "./components/useimperative/useimperativehandle";
import UseLayoutEffect from "./components/uselayouteffect";
import UseReducer from "./components/usereducer";
import UseRef from "./components/useref";
import UseStateHook from "./components/usestate";

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativeHandle />
      <UseContext />
    </div>
  );
}

export default App;
