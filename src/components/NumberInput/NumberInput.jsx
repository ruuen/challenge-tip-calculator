import "./NumberInput.scss";
import iconCurrency from "../../media/images/icon-dollar.svg";
import iconPerson from "../../media/images/icon-person.svg";

export default function NumberInput({ field, handleChange }) {
  return (
    <div className="calculator__input-wrapper">
      <div className="calculator__label-wrapper">
        <label className="calculator__input-label" htmlFor={field.fieldName}>
          {field.label}
        </label>
        {field.hasError === true ? <span className="calculator__field-error">{field.errorMsg}</span> : ""}
      </div>
      <div className="calculator__input-unit-wrapper">
        <input
          className={`calculator__input ${field.hasError === true ? "calculator__input--error" : ""}`}
          id={field.fieldName}
          name={field.fieldName}
          value={field.value === 0 ? "" : field.value}
          placeholder="0"
          onChange={handleChange}
        />
        <img
          className="calculator__unit"
          src={field.fieldName === "bill" ? iconCurrency : iconPerson}
          alt={field.fieldName === "bill" ? "Dollar sign" : "Person"}
        />
      </div>
    </div>
  );
}
