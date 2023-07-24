import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();


  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen])


  return (
    <PopupWithForm
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      buttonText="Сохранить">
      <input
        className="popup__input-text popup__input-text_type_link"
        name="link"
        placeholder="Ссылка на картинку"
        id="link-avatar"
        type="url"
        ref={avatarRef}
        required
      />
      <span className="popup__input-error" id="link-avatar-error"></span>
    </PopupWithForm>
  )

}

export default EditAvatarPopup;