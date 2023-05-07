import "./ButtonGroupInput.scss";
import Button from "../Button/Button";
import CustomInput from "../CustomInput/CustomInput";

const presetBtns = [
  {
    name: "5pc",
    type: "preset",
    value: 5,
  },
  {
    name: "10pc",
    type: "preset",
    value: 10,
  },
  {
    name: "15pc",
    type: "preset",
    value: 15,
  },
  {
    name: "25pc",
    type: "preset",
    value: 25,
  },
  {
    name: "50pc",
    type: "preset",
    value: 50,
  },
  {
    name: "custom",
    type: "custom",
    value: 0,
  },
];

export default function ButtonGroupInput({ field, handleChange }) {
  const buttonElements = presetBtns.map((option, index) => {
    if (option.type === "preset") {
      return (
        <Button
          key={index + 1}
          id={`tipPercent__${option.name}`}
          name="tipPercent__preset"
          value={option.value}
          isSelected={
            field.source === "preset" && Number(field.value) === option.value
              ? true
              : false
          }
          handleClick={handleButtonChange}
        />
      );
    }

    return (
      <CustomInput
        key={index + 1}
        id={`tipPercent__custom`}
        name="tipPercent__custom"
        value={field.source === "custom" ? field.value : ""}
        isSelected={field.source === "custom" && true}
        handleChange={handleButtonChange}
        hasError={field.hasError}
        errorMsg={field.errorMsg}
      />
    );
  });

  function handleButtonChange(e) {
    const source = {
      source: e.target.name === "tipPercent__custom" ? "custom" : "preset",
    };

    handleChange(
      { target: { name: "tipPercent", value: e.target.value } },
      source
    );
  }

  return (
    <div className="calculator__btn-input-group">
      {/* Use aria label for this one */}
      <span className="calculator__btn-group-label">Select Tip %</span>
      <div className="calculator__btn-group">{buttonElements}</div>
    </div>
  );
}
