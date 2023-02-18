import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div>
        <h4 className="headerTitle">Portfolio</h4>
      </div>
      <div className="navigationLinksDiv">
        <Link to="/" className="navigationLinks">
          <h4>Home</h4>
        </Link>
        <Link to="/aboutMe" className="navigationLinks">
          <h4>Sobre Mim</h4>
        </Link>
        <Link to="/contact" className="navigationLinks">
          <h4>Contato</h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
