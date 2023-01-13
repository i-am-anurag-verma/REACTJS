import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="count_css">
      <h1>{count}</h1>
      <div className="btn_wrapper">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
