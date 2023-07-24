import React from 'react';
import Card from './Card.js';
import editIcon from '../images/editIcon.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info-container">
          <div className="profile__avatar-container">
            <div style={{ backgroundImage: `url(${currentUser.avatar})` }} className="profile__avatar" />
            <div className="profile__avatar-overlay">
              <img src={editIcon} className="profile__avatar-icon button"
                alt="Редактировать профиль" onClick={onEditAvatar} />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__heading">{currentUser.name}</h1>
            <button type="button" className="button profile__button-edit" aria-label="Edit" onClick={onEditProfile}></button>
            <p className="profile__subheading">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="button profile__button-add" aria-label="Add" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list list">
          {cards.map((data) => (
            <Card card={data} key={data._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;