import React, { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import DarkLightMode from '../context/DarkLightMode';
import DropDown from './DropDown';
import './Styles/Header.css';

function Header() {
  const { darkLightMode, setMode } = useContext(DarkLightMode);

  const onClickMode = () => {
    setMode(darkLightMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={ `header ${darkLightMode}BackGround` }>
      <div>
        <h4 className="headerTitle">Portfolio</h4>
      </div>
      <div>
        <button className="darkLightModeIcons">
          {
            darkLightMode === 'dark'
              ? (
                <BsMoon
                  className={ `${darkLightMode}Icons` }
                  onClick={ onClickMode }
                />
              )
              : (
                <BsSun
                  className={ `${darkLightMode}Icons` }
                  onClick={ onClickMode }
                />
              )
          }
        </button>
        <DropDown />
      </div>
    </div>
  );
}

export default Header;
