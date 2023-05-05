import { useState } from "react";
import NumberInput from "../NumberInput/NumberInput";
import ButtonGroupInput from "../ButtonGroupInput/ButtonGroupInput";

export default function TipInputs() {
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

  const inputElements = formState.map((field) => {
    switch (field.fieldName) {
      case "bill":
      case "numberOfPeople":
        return <NumberInput key={field.id} field={field} handleChange={handleChange} />;
      case "tipPercent":
        return <ButtonGroupInput key={field.id} field={field} handleChange={handleChange} />;
      default:
        return;
    }
  });

  return <form className="calculator__input-group">{inputElements}</form>;
}
