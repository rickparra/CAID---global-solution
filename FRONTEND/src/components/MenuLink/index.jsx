import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './menulink.scss'; // Importando o arquivo SCSS diretamente

export default function MenuLink({ children, to, onClick }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      className={`link ${isScrolled ? 'scrolled' : ''} ${location.pathname === to ? 'linkDestacado' : 'linkNormal'}`}
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
