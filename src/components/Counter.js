import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>This is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button
        id="decrement-btn"
        onClick={() => counter > 0 && setCounter(counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export { Counter };
