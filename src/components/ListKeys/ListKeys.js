import React from "react";
import { userData } from "./data";

const ListItem = ({ id, name }) => {
  console.log("render", id, name);
  return <li>{name}</li>;
};

export const ListKeys = () => {
  const [users, setUsers] = React.useState(
    userData,
  );

  const handleRemoveLast = () => {
    setUsers([...users.slice(0, -1)]);
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <ListItem key={user.id} {...user} />
        ))}
      </ul>

      <button onClick={handleRemoveLast}>
        Remove Last
      </button>
    </div>
  );
};
