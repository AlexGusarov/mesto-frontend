import { useState } from "react";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(
      {
        ...formData,
        [name]: value
      })
  }

  const makeFormClear = () => {
    setFormData({
      email: '',
      password: ''
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let { email, password } = formData;
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
    makeFormClear();
    evt.target.reset();
  }


  return (

    <div className="welcome">
      <div className="welcome__container">
        <p className="welcome__title">Вход</p>
        <form className="welcome__form" onSubmit={handleSubmit}>
          <input
            className="welcome__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email || ''}
            onChange={handleChange}>
          </input>
          <input
            className="welcome__input"
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            value={formData.password || ''}
            onChange={handleChange}>
          </input>
          <button type="submit" className="welcome__button-submit button">Войти</button>
        </form>
      </div>
    </div>

  )
}

export default Login;
