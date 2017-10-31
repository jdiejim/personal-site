import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header className="Header">
       <nav className="Header-nav">
          <NavLink to="/about" className="Header-tab" activeClassName="is-selected">About</NavLink>
          <NavLink to="/projects" className="Header-tab" activeClassName="is-selected">Projects</NavLink>
          <NavLink to="/skills" className="Header-tab" activeClassName="is-selected">Skills</NavLink>
          <NavLink to="/skills" className="Header-tab" activeClassName="is-selected">Blog</NavLink>
          <button id="contact-me">Contact Me</button>
      </nav>
    </header>
  );
}

export default Header;
