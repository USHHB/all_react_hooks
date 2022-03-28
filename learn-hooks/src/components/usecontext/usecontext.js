import React, { useState, createContext } from "react";
import Login from "./login";
import User from "./user";

export const AppContext = createContext(null);

function UseContext() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={(username, setUsername)}>
      <h1>USECONTEXT</h1>
      <Login />
      <User />
    </AppContext.Provider>
  );
}

export default UseContext;
