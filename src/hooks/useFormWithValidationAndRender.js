import { useState, useCallback } from "react";

function useFormWithValidationAndRender(formObj) {
  const [form, setForm] = useState(formObj);
  const [, setValues] = useState({});

  // const handleChange = (evt) => {
  //   const input = evt.target;
  //   const value = input.value;
  //   const name = input.name;
  //   setValues({ ...values, [name]: value });
  // };

  function renderFormInputs() {
    return Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  }

  const isInputFieldValid = useCallback(
    (inputField) => {
      for (const rule of inputField.validationRules) {
        if (!rule.validate(inputField.value, form)) {
          inputField.errorMessage = rule.message;
          return false;
        }
      }

      return true;
    },
    [form]
  );

  const onInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      const inputObj = { ...form[name] };

      inputObj.value = value;

      const isValidInput = isInputFieldValid(inputObj);

      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        inputObj.valid = false;
      }

      inputObj.touched = true;
      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid]
  );


  const isFormValid = useCallback(() => {
    let isValid = true;
    const arr = Object.values(form);

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  const resetForm = useCallback(
    (newValues = {}) => {
      setValues(newValues);
    },
    [setValues]
  );

  return { renderFormInputs, isFormValid, form, resetForm };
}

export default useFormWithValidationAndRender;
