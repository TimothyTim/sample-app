import React, { useState } from "react";

export const CancelFetches = () => {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);
  // const controllerRef = useRef(null);

  const fetchTodoById = (todoId) => {
    setLoading(true);

    // if (controllerRef.current) controllerRef.current.abort();
    // controllerRef.current = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
      // signal: controllerRef.current.signal,
    })
      .then((res) => res.json())
      .then(setTodo)
      .catch(console.error)
      .finally(() => {
        setLoading(false);
        // controllerRef.current = null;
      });
  };

  return (
    <div>
      <button onClick={() => fetchTodoById(1)}>fetch todo 1</button>
      <button onClick={() => fetchTodoById(2)}>fetch todo 2</button>
      <div>{loading ? "Loading..." : JSON.stringify(todo)}</div>
    </div>
  );
};
