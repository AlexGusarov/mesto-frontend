import React from "react";

import "./Input.css";

function InputField(props) {
  const {
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value,
    placeholder
  } = props;

  return (
    <div className="inputContainer">
      <label className="input__label">{label}</label>
      <input className={`input__input ${!isValid && 'input__input_invalid'}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
      />
      {errorMessage && !isValid && (
        <span className="input__error-message">{errorMessage}</span>
      )}
    </div>
  );
}

export default React.memo(InputField);
