import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link to="/aboutMe" className="navigationLinks">
        <h4>Sobre Mim</h4>
      </Link>
      <Link to="/contact" className="navigationLinks">
        <h4>Contato</h4>
      </Link>
    </div>
  );
}

export default Header;
