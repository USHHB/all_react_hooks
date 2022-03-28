import axios from "axios";
import React from "react";
import { useEffect, useState, useMemo } from "react";

function UseMemo() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {}
  };

  return (
    <div>
      <h1>UseMemo</h1>
    </div>
  );
}

export default UseMemo;
