import React, { useState } from "react";

export const FormComponent = () => {
  const [name, setName] = useState("");

  console.log("render", name);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => setName("")}>
        reset value
      </button>
      <button type="submit">Submit Form</button>
    </form>
  );
};
