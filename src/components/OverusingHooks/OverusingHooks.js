import React, {
  useEffect,
  useState,
} from "react";

export const OverusingHooks = ({
  firstName = "Bob",
}) => {
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return (
    <div>
      <input
        onChange={(e) =>
          setLastName(e.currentTarget.value)
        }
        value={lastName}
      />
      <br />
      {fullName}
    </div>
  );
};
