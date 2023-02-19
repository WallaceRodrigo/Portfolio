import React from 'react';
import DropDown from './DropDown';
import './Styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div>
        <h4 className="headerTitle">Portfolio</h4>
      </div>
      <div>
        <DropDown />
      </div>
    </div>
  );
}

export default Header;
