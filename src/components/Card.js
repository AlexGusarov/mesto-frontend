import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`button ${isOwn ? 'element__button-trash' : 'element__button-trash_hidden'}`);
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`button element__button-like ${isLiked ? 'element__button-like_active' : ''}`);

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card)
  }

  return (
    <li className="element" id={card._id}>
      <div onClick={handleCardClick} className="element__image" style={{ backgroundImage: `url(${card.link})` }} />
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button" aria-label="Trash" />
      <div className="element__footer">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button type="button" className={cardLikeButtonClassName} aria-label="Like" onClick={handleLikeClick} />
          <span className="element__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;