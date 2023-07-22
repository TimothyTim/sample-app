import React, {
  useEffect,
  useState,
} from "react";

export const CancelFetches = () => {
  const [selectedId, setSelectedId] = useState();
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedId) return;

    setLoading(true);
    const controller = new AbortController();

    fetch(
      `https://jsonplaceholder.typicode.com/todos/${selectedId}`,
      {
        signal: controller.signal,
      },
    )
      .then((res) => res.json())
      .then(setTodo)
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [selectedId]);

  return (
    <div>
      <button onClick={() => setSelectedId(1)}>
        fetch todo 1
      </button>
      <button onClick={() => setSelectedId(2)}>
        fetch todo 2
      </button>
      <div>
        {loading
          ? "Loading..."
          : JSON.stringify(todo)}
      </div>
    </div>
  );
};
