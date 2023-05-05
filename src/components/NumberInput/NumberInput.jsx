export default function NumberInput({ field, handleChange }) {
  return (
    <div className="calculator__input-wrapper">
      <label className="calculator__input-label" htmlFor={field.fieldName}>
        {field.label}
      </label>
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
