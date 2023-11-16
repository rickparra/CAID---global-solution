import React, { useState } from 'react';
import './menu.scss'; // Importando o arquivo SCSS diretamente

import MenuLink from '../MenuLink';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>CA\D </h1>
      </div>

      <div className="hamburguer" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'active' : ''}`}></div>
        <div className={`line ${menuOpen ? 'active' : ''}`}></div>
        <div className={`line ${menuOpen ? 'active' : ''}`}></div>
      </div>

      <nav className={`nav-bar ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <MenuLink to="/" onClick={closeMenu}>
              Login
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/about" onClick={closeMenu}>
              Sobre
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/predict" onClick={closeMenu}>
              CAID
            </MenuLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
