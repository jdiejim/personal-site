import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactForm from './ContactForm';
import menu from '../assets/menu.svg';
import cancel from '../assets/cancel.svg';
import './styles/Header.css';

function Header({ handleToggleMenu, handleToggleForm, menuIsHidden, contactIsHidden }) {
  const menuBG = { backgroundImage: `url(${menu})` };
  const cancelBG = { backgroundImage: `url(${cancel})` };
  const menuClass = menuIsHidden ? ' menu-hidden' : '';
  const contactClass = contactIsHidden ? ' contact-hidden' : '';
  const headerClass = `Header${menuClass}${contactClass}`;

  return (
    <header className={headerClass}>
      <button onClick={handleToggleMenu} className="Header-btn-menu" style={menuBG} />
       <nav className="Header-nav">
        <button onClick={handleToggleMenu} className="Header-btn-cancel" style={cancelBG} />
        <NavLink exact to="/" className="Header-tab" activeClassName="is-selected">About</NavLink>
        <NavLink to="/projects" className="Header-tab" activeClassName="is-selected">Projects</NavLink>
        <NavLink to="/skills" className="Header-tab" activeClassName="is-selected">Skills</NavLink>
        <NavLink to="/blog" className="Header-tab" activeClassName="is-selected">Blog</NavLink>
      </nav>
      <button onClick={handleToggleForm} className="Header-contact-btn">Contact Me</button>
      <ContactForm handleToggleForm={handleToggleForm} />
    </header>
  );
}

export default Header;
