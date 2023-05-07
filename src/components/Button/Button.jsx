import "./Button.scss";

export default function Button({ id, name, value, isSelected, handleClick }) {
  // Can probably append a % symbol onto the button value with CSS
  return (
    <input
      className={`calculator__btn ${isSelected === true ? "calculator__btn--selected" : ""}`}
      type="button"
      id={id}
      name={name}
      value={value}
      onClick={handleClick}
    />
  );
}
