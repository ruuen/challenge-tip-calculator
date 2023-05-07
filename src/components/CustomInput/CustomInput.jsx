import "./CustomInput.scss";

export default function CustomInput({ id, name, value, isSelected, hasError, errorMsg, handleChange }) {
  return (
    <div>
      <input
        className={`calculator__input-custom ${isSelected ? "calculator__input-custom--selected" : ""}`}
        id={id}
        type="text"
        name={name}
        inputMode="numeric"
        value={value}
        placeholder="Custom"
        onChange={handleChange}
      />
      <div className="calculator__input-custom--info">
        <label className="visually-hidden" htmlFor={name}>
          Custom Tip Percent
        </label>
      </div>
    </div>
  );
}
