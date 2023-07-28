import useFormWithValidationAndRender from '../hooks/useFormWithValidationAndRender'
import { signupForm } from "../utils/formConfig";
import ErrorTooltip from '../components/ErrorTooltip/ErrorTooltip';

function Login({ onLogin, isError, message }) {
  const { renderFormInputs, isFormValid, form, resetForm } = useFormWithValidationAndRender(signupForm);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      return;
    }

    onLogin(email, password);
    resetForm();
    evt.target.reset();
  }


  return (
    <div className="welcome">
      <div className="welcome__container">
        <p className="welcome__title">Вход</p>
        <form className="welcome__form" onSubmit={handleSubmit}>
          {renderFormInputs()}
          {isError && (<ErrorTooltip message={message} />)}
          <button
            type="submit"
            className="welcome__button-submit button"
            disabled={!isFormValid()}
          >
            Войти
          </button>
        </form>
      </div>
    </div>

  )
}

export default Login;
