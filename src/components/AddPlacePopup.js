import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({ name, link });
  }

  React.useEffect(() => {
    if (isOpen) {
      setName('');
      setLink('');
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      buttonText="Сохранить">
      <input className="popup__input-text popup__input-text_type_title" type="text" name="name" id="title"
        placeholder="Название" minLength="2" maxLength="30" value={name} onChange={handleNameChange} required />
      <span className="popup__input-error" id="title-error"></span>
      <input className="popup__input-text popup__input-text_type_link" name="link" placeholder="Ссылка на картинку"
        id="url" type="url" value={link} onChange={handleLinkChange} required />
      <span className="popup__input-error" id="url-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;