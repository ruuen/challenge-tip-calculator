import { useState } from "react";
import TipInputs from "../TipInputs/TipInputs";
import TipResults from "../TipResults/TipResults";
import validateFormData from "../../validators/validateFormData";

const initialFormState = [
  {
    id: 1,
    fieldName: "bill",
    label: "Bill",
    value: 0,
    hasError: false,
    errorMsg: null,
  },
  {
    id: 2,
    fieldName: "tipPercent",
    label: "Select Tip %",
    source: "preset",
    value: 5,
    hasError: false,
    errorMsg: null,
  },
  {
    id: 3,
    fieldName: "numberOfPeople",
    label: "Number of People",
    value: 0,
    hasError: false,
    errorMsg: null,
  },
];

export default function TipCalculator() {
  const [formState, setFormState] = useState(initialFormState);

  const [splitResult, setSplitResult] = useState({
    tipEach: 0.0,
    totalEach: 0.0,
  });

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

  function handleSubmit(e) {
    // debugger;
    e.preventDefault();

    const newFormState = validateFormData(formState);

    if (newFormState.find((field) => field.hasError === true)) {
      setFormState(newFormState);
      return;
    }

    const inputs = {
      bill: newFormState.find((field) => field.fieldName === "bill").value,
      tipPercent: newFormState.find((field) => field.fieldName === "tipPercent").value,
      numberOfPeople: newFormState.find((field) => field.fieldName === "numberOfPeople").value,
    };

    updateSplit(inputs);
    setFormState(newFormState);
  }

  function updateSplit({ bill, tipPercent, numberOfPeople }) {
    setSplitResult({
      tipEach: (bill * (tipPercent / 100)) / numberOfPeople,
      totalEach: (bill * (tipPercent / 100 + 1)) / numberOfPeople,
    });
  }

  function handleReset() {
    setFormState(initialFormState);
    setSplitResult({
      tipEach: 0.0,
      totalEach: 0.0,
    });
  }

  return (
    <main className="calculator">
      <TipInputs formState={formState} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TipResults tipEach={splitResult.tipEach} totalEach={splitResult.totalEach} handleReset={handleReset} />
    </main>
  );
}
