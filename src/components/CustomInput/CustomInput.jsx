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
        onChange={handleChange}
      />
      <div>
        <label className="visually-hidden" htmlFor={name}>
          Custom Tip Percent
        </label>
        {hasError === true ? <span className="calculator__field-error">{errorMsg}</span> : ""}
      </div>
    </div>
  );
}
