import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';


const Header = () => {
  const linkIsActive = (isActive) => {
    return isActive ? 'header_item-link header_item-link--is--active' : 'header_item-link';
  };

  return (
    <header>
      <nav className="header">
        <NavLink to="/" className="header_logo">
          RICK & MORTY
        </NavLink>
        <ul className="header_nav-list">
          <li className="header_list-item">
            <NavLink to="/" className={({ isActive }) => linkIsActive(isActive)}>
              Home
            </NavLink>
          </li>
          <li className="header_list-item">
            <NavLink to="/about" className={({ isActive }) => linkIsActive(isActive)}>
              Acerca de mí
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
