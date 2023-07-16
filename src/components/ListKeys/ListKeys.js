import React, {
  useEffect,
  useState,
} from "react";
import orderBy from "lodash/orderBy";
import { userData } from "./data";

const ListItem = ({ name }) => {
  console.log("render");

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("name", name);
  }, [name]);

  return <li>{name}</li>;
};

export const ListKeys = () => {
  const [sortOrder, setSortOrder] = useState(
    "asc",
  );
  const [users, setUsers] = useState(userData);

  const handleRemoveLast = () => {
    setSortOrder(
      sortOrder === "asc" ? "desc" : "asc",
    );
    setUsers([...users.reverse()]);
  };

  // sort countries base on state value with lodash orderBy function
  const sortedUsers = orderBy(
    users,
    "name",
    sortOrder,
  );

  return (
    <div>
      <ul>
        {sortedUsers.map((user, index) => (
          <ListItem
            key={user.id}
            name={user.name}
          />
        ))}
      </ul>

      <button onClick={handleRemoveLast}>
        Reverse
      </button>
    </div>
  );
};
