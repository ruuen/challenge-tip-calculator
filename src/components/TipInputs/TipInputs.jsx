import "./TipInputs.scss";
import NumberInput from "../NumberInput/NumberInput";
import ButtonGroupInput from "../ButtonGroupInput/ButtonGroupInput";

export default function TipInputs({ formState, handleChange, handleSubmit }) {
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

  return (
    <form className="calculator__input-group" onSubmit={handleSubmit}>
      {inputElements}
      <button className="visually-hidden" type="submit">
        Submit
      </button>
    </form>
  );
}
