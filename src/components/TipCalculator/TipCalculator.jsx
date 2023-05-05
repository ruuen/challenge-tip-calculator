import { useState } from "react";
import TipInputs from "../TipInputs/TipInputs";
import TipResults from "../TipResults/TipResults";

export default function TipCalculator() {
  const [formState, setFormState] = useState([
    {
      id: 1,
      fieldName: "bill",
      label: "Bill",
      value: 0,
    },
    {
      id: 2,
      fieldName: "tipPercent",
      label: "Select Tip %",
      value: 5,
      source: "preset",
    },
    {
      id: 3,
      fieldName: "numberOfPeople",
      label: "Number of People",
      value: 0,
    },
  ]);

  function handleChange(e, additionalValues = {}) {
    const { name, value } = e.target;
    const predicate = (field) => field.fieldName === name;

    setFormState((prevFormState) => {
      const newFormState = Array.from(prevFormState);
      newFormState.splice(newFormState.findIndex(predicate), 1, {
        ...newFormState.find(predicate),
        ...additionalValues,
        value: value,
      });
      return newFormState;
    });
  }

  return (
    <main className="calculator">
      <TipInputs formState={formState} handleChange={handleChange} />
      <TipResults />
    </main>
  );
}
