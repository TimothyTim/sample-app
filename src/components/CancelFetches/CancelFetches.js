import React, { useEffect } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "some data" });
    }, 2000);
  });
};

export const CancelFetches = ({
  url = "some.url?param=1",
}) => {
  const [state, setState] = React.useState({});
  const [loading, setLoading] = React.useState(
    false,
  );

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then(setState)
      .catch(console.error)
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return (
    <div>
      {loading ? "Loading..." : state.data}
    </div>
  );
};
