import React from "react";
import Input from "../components/Input/Input";

import {
  requiredRule,
  minLengthRule,
  maxLengthRule,
  emailValidRule,
} from "./inputValidationRules";

function createFormFieldConfig(label, name, type, placeholder, defaultValue = "") {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <Input
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          placeholder={placeholder}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false
  };
}

export const signupForm = {

  email: {
    ...createFormFieldConfig("E-mail", "email", "email", "ipetrov@email.com"),
    validationRules: [
      requiredRule("email"),
      minLengthRule("E-mail", 8),
      maxLengthRule("E-mail", 25),
      emailValidRule()
    ]
  },
  password: {
    ...createFormFieldConfig("Пароль", "password", "password", "********"),
    validationRules: [
      requiredRule("password"),
      minLengthRule("Пароль", 8),
      maxLengthRule("Пароль", 20)
    ]
  }
};

export const signinForm = {
  email: {
    ...createFormFieldConfig("E-mail", "email", "email", "ipetrov@email.com"),
    validationRules: [
      requiredRule("email"),
      minLengthRule("E-mail", 10),
      maxLengthRule("E-mail", 25),
      emailValidRule()
    ]
  },
  password: {
    ...createFormFieldConfig("Пароль", "password", "password", "********"),
    validationRules: [
      requiredRule("password"),
      minLengthRule("Пароль", 8),
      maxLengthRule("Пароль", 20)
    ]
  }
};
