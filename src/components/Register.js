import { Link, Redirect } from 'react-router-dom';
import useFormWithValidationAndRender from '../hooks/useFormWithValidationAndRender'
import { signupForm } from "../utils/formConfig";
import ErrorTooltip from '../components/ErrorTooltip/ErrorTooltip';


function Register({ onRegister, isError, message, loggedIn }) {

  const { renderFormInputs, isFormValid, form, resetForm } = useFormWithValidationAndRender(signupForm);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      return;
    }

    onRegister(email, password);
    resetForm();
    evt.target.reset();
  }

  return (
    <>
      <div className="welcome">
        <div className="welcome__container">
          <p className="welcome__title">Регистрация</p>
          <form className="welcome__form" onSubmit={handleSubmit}>
            {renderFormInputs()}
            {isError && (<ErrorTooltip message={message} />)}
            <button
              type="submit"
              className="welcome__button-submit button"
              disabled={!isFormValid()}
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
      <Link to="/sign-in" className="welcome__link-to-signin button">Уже зарегистрированы? Войти</Link>
      {loggedIn && <Redirect to="/sign-in" />}
    </>
  )
}

export default Register;
