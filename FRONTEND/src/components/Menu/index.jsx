import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate
import './menu.scss'; // Importando o arquivo SCSS diretamente

import MenuLink from '../MenuLink';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [logoutVisible, setLogoutVisible] = useState(false);

  const handleProfileClick = () => {
    setLogoutVisible(!logoutVisible);
  };

  const handleLogout = () => {
    // Limpa todos os dados da sessionStorage
    sessionStorage.clear();
    // Redirecione o usuário para a página de login
    navigate('/');
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

      <div className="pre-nav">
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
                TIAO
              </MenuLink>
            </li>
          </ul>
        </nav>
        <div className="profile" onClick={handleProfileClick}>
          <p>A\</p>
          {logoutVisible && (
            <div className="logout-box">
              <p>Configurações</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
