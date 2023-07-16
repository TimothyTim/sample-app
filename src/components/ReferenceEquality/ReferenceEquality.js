import { useEffect, useState } from "react";

let defaultValue = {
  name: "jimmy",
  age: 30,
};

export const ReferenceEquality = () => {
  const [patient, setPatient] = useState(
    defaultValue,
  );

  // this will have an infinite loop
  useEffect(() => {
    if (patient.name === "jimmy") {
      setPatient((p) => ({
        ...p,
        age: p.age + 1,
      }));
    }
  }, [patient.name]);

  return (
    <dl className="App">
      <dt>Name:</dt>
      <dd>{patient.name}</dd>
      <dt>Age:</dt>
      <dd>{patient.age}</dd>
    </dl>
  );
};
