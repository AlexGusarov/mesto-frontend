import React, { useCallback } from "react";
import success from "../images/Union-success.png"
import fail from "../images/Union-fail.png"

function InfoToolTip({ isOpen, onClose, status }) {

  const handleEsc = useCallback((evt) => {
    if (evt.key === 'Escape') {
      onClose && onClose()
    }
  }, [onClose]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, handleEsc])

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} >
      <div className="popup__container-union">
        <button type="button" className="button popup__button-close" aria-label="Close" onClick={onClose}></button>
        <img className="popup__union-img" src={status === 'ok' ? success : fail} alt="" />
        <p className="popup__union-text">
          {status === 'ok'
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте еще раз.'
          }
        </p>
      </div>
    </div>
  )
}

export default InfoToolTip;
