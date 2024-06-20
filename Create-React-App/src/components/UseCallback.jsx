import React, { useState, useCallback, memo } from "react";

const Timer = memo(({ value, add }) => {
  console.log("Child Component Called");
  return (
    <div>
      <p>Add: {value}</p>
      <button onClick={add}>Add</button>
    </div>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);

  const handleCount = () => {
    console.log("handleCount called");
    setCount(count + 1);
  };

  const handleAdd = useCallback(() => {
    console.log("handleAdd called");
    setAdd(add + 2);
  }, [add]);

// const handleAdd = () => {
//     console.log("handleAdd called");
//     setAdd(add + 2);
//   };

  return (
    <div>
      <h1>Timer App using useCallback</h1>
      <Timer value={add} add={handleAdd} />
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Count</button>
    </div>
  );
};

export default UseCallback;