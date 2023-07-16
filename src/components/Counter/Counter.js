import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (currentCount) => {
    console.log("incrementCount");
    return currentCount + 1;
  };

  useEffect(() => {
    setCount(incrementCount);
    setCount(incrementCount);
    setCount(incrementCount);
    setCount(incrementCount);
  }, []);

  return <div>{count}</div>;
};
