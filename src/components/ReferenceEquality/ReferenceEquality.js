import { useEffect, useState } from "react";

const userDataDefault = {
  id: 1,
  name: "jimmy",
  age: 30,
};

export const ReferenceEquality = () => {
  const [user, setUser] = useState(
    userDataDefault,
  );

  const newValues = { age: 1 };

  // this will have an infinite loop
  useEffect(() => {
    setUser((prevUserState) => ({
      ...prevUserState,
      age: prevUserState.age + newValues.age,
    }));
  }, []);

  return (
    <dl className="App">
      <dt>Name:</dt>
      <dd>{user.name}</dd>
      <dt>Age:</dt>
      <dd>{user.age}</dd>
    </dl>
  );
};
