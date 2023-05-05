export default function validateFormData(formData) {
  const validatedFields = formData.map((field) => {
    if (
      (field.value === "" && field.source === "custom") ||
      (field.value === "" && field.fieldName !== "tipPercent") ||
      field.value === null
    ) {
      return {
        ...field,
        hasError: true,
        errorMsg: "Must have a value",
      };
    }

    if (isNaN(Number(field.value))) {
      return {
        ...field,
        hasError: true,
        errorMsg: "Must be a whole or decimal number",
      };
    }

    if (Number(field.value) < 1) {
      return {
        ...field,
        hasError: true,
        errorMsg: "Can't be zero",
      };
    }

    return {
      ...field,
      value: Number(field.value),
      hasError: false,
      errorMsg: null,
    };
  });

  return validatedFields;
}
