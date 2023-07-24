import React from "react";

function ImagePopup({ card, onClose }) {
  return (

    < div className={`popup popup_type_image ${card.name && 'popup_opened'}`}>
      <div className="popup__container-image">
        <button type="button" className="button popup__button-close" aria-label="Close" onClick={onClose}></button>
        <img className="popup__image" alt={card.name} src={card.link} />
        <h2 className="popup__title-image">{card.name}</h2>
      </div>
    </div >
  )
}

export default ImagePopup;