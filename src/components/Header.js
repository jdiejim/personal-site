import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../assets/menu.svg';
import cancel from '../assets/cancel.svg';
import './styles/Header.css';

function Header({ handleOnClick, menuIsHidden }) {
  const menuBG = { backgroundImage: `url(${menu})` };
  const cancelBG = { backgroundImage: `url(${cancel})` };
  const headerClass = `Header ${menuIsHidden ? 'menu-hidden' : ''}`

  return (
    <header className={headerClass}>
      <button onClick={handleOnClick} className="Header-btn-menu" style={menuBG} />
       <nav className="Header-nav">
          <button onClick={handleOnClick} className="Header-btn-cancel" style={cancelBG} />
          <NavLink to="/about" className="Header-tab" activeClassName="is-selected">About</NavLink>
          <NavLink to="/projects" className="Header-tab" activeClassName="is-selected">Projects</NavLink>
          <NavLink to="/skills" className="Header-tab" activeClassName="is-selected">Skills</NavLink>
          <NavLink to="/blog" className="Header-tab" activeClassName="is-selected">Blog</NavLink>
      </nav>
      <button id="contact-me">Contact Me</button>
    </header>
  );
}

export default Header;
