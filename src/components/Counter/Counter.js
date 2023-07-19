import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    setCount(count + 1);
  }, []);

  return <div>{count}</div>;
};
