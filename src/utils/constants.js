export const BASE_URL = 'https://mesto-server-1bb72610626b.herokuapp.com';

export const errorMessages = {
  codeConflict: 409,
  conflict: "Пользователь с таким email уже существует",
  registerMistake: "При регистрации пользователя произошла ошибка",
  badRequest: "Вы ввели неправильный логин или пароль",
  noData: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
}

export const successMessages = {
  register: "Вы успешно зарегистрировались",
  profile: "Вы успешно поменяли личные данные"
}
