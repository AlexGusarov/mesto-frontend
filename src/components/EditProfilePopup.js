import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="user"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      title="Редактировать профиль">
      <input className="popup__input-text popup__input-text_type_name" type="text" name="name" id="name" minLength="2"
        maxLength="40" placeholder="Имя" required value={name || ""} onChange={handleNameChange} />
      <span className="popup__input-error" id="name-error"></span>
      <input className="popup__input-text popup__input-text_type_job" type="text" name="job" id="job" minLength="2"
        maxLength="200" placeholder="Профессия" required value={description || ""} onChange={handleDescriptionChange} />
      <span className="popup__input-error" id="job-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;