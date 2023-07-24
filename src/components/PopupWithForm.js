import React from "react";

function PopupWithForm({ name, isOpen, onClose, title, children, buttonText, onSubmit }) {

  function handleEsc(e) {
    if (e.key === 'Escape') {
      onClose && onClose()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen])

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="button popup__button-close" aria-label="Close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form popup__form_${name}`} name={`popup-form-${name}`} onSubmit={onSubmit} >
          {children}
          <button className="button popup__submit popup__submit_type_add" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;