export default function NumberInput({ field, handleChange }) {
  return (
    <div className="calculator__input-wrapper">
      <div className="calculator__label-wrapper">
        <label className="calculator__input-label" htmlFor={field.fieldName}>
          {field.label}
        </label>
        {field.hasError === true ? <span className="calculator__field-error">{field.errorMsg}</span> : ""}
      </div>
      <input
        className="calculator__input"
        id={field.fieldName}
        name={field.fieldName}
        value={field.value === 0 ? "" : field.value}
        placeholder="0"
        onChange={handleChange}
      />
    </div>
  );
}
