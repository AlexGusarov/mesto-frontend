function createValidationRule(ruleName, errorMessage, validateFunc) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc
  };
}

export function requiredRule(inputName) {
  return createValidationRule(
    "required",
    `Требуется ${inputName}`,
    (inputValue, formObj) => inputValue.length !== 0
  );
}

export function minLengthRule(inputName, minCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName} должен содержать как минимум ${minCharacters} знаков`,
    (inputValue, formObj) => inputValue.length >= minCharacters
  );
}

export function maxLengthRule(inputName, maxCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName} не может содержать больше ${maxCharacters} знаков`,
    (inputValue, formObj) => inputValue.length <= maxCharacters
  );
}


export function nameValidRule() {
  return createValidationRule(
    "nameValid",
    "В имени разрешены только буквы и пробел",
    (inputValue) => /[a-zA-Zа-яА-Я \\-]+/.test(inputValue)
  );
}

export function emailValidRule() {
  return createValidationRule(
    "emailValid",
    "Должен быть почтовый адрес",
    (inputValue) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(inputValue)
  );
}

export function passwordMatchRule() {
  return createValidationRule(
    "passwordMatch",
    `Пароли не совпадают`,
    (inputValue, formObj) => inputValue === formObj.password.value
  );
}
