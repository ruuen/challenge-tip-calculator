export default function CustomInput({ id, name, value, isSelected, handleChange }) {
  return (
    <input
      className={`calculator__input-custom ${isSelected ? "calculator__input-custom--selected" : ""}`}
      id={id}
      type="text"
      name={name}
      inputMode="numeric"
      value={value}
      onChange={handleChange}
    />
  );
}
