import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg"

function Header({ email, onSignOut }) {

  const { pathname } = useLocation();

  return (
    <header className="header">
      <img src={logo} alt="Место" className="header__logo" />
      {(pathname === '/sign-up') &&
        <Link to="/sign-in" className="header__link">Войти</Link>}
      {(pathname === '/sign-in') &&
        <Link to="/sign-up" className="header__link">Регистрация</Link>}
      {(pathname === '/') &&
        <div className="header__userinfo">
          <p className="header__login">{email}</p>
          <button className="header__button" onClick={onSignOut}>Выйти</button>
        </div>}
    </header>
  )
}

export default Header;