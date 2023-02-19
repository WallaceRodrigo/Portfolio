import React, { useContext, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { RiGitRepositoryFill, RiContactsFill } from 'react-icons/ri';
import { SiAboutdotme } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import './Styles/DropDown.css';
import ActiveDropDown from '../context/ActiveDropDown';

function DropDown() {
  const [buttonColor, setButtonColor] = useState('white');
  const { active, setActive } = useContext(ActiveDropDown);

  useEffect(() => {
    const mainDiv = document.getElementById('DropDownContainer');
    const button = document.getElementById('dropDownButton');
    if (active === true) {
      mainDiv.classList.add('DropDown');
      button.classList.add('rotate');
      setButtonColor('black');
    }
  }, [active]);

  const onClick = () => {
    const button = document.getElementById('dropDownButton');
    const mainDiv = document.getElementById('DropDownContainer');
    const navDiv = document.querySelector('.navigationLinksDiv');

    const classValidation = button.classList.contains('rotate')
      ? button.classList.remove('rotate') : button.classList.add('rotate');

    if (mainDiv.classList.contains('DropDown')) {
      mainDiv.classList.remove('DropDown');
      mainDiv.classList.add('DropDownLeave');
      navDiv.classList.remove('navigationLinksDiv');
      navDiv.classList.add('navigationLinksDivLeave');
      button.classList.add('leaveButton');
    } else {
      mainDiv.classList.remove('DropDownLeave');
      button.classList.remove('leaveButton');
      mainDiv.classList.add('DropDown');
    }

    if (mainDiv.classList.contains('DropDownLeave')) {
      const timeMs2 = 1000;
      setTimeout(() => {
        setButtonColor(buttonColor === 'white' ? 'black' : 'white');
      }, timeMs2);
    } else {
      setButtonColor(buttonColor === 'white' ? 'black' : 'white');
    }

    const timeMs = 500;
    setTimeout(() => {
      setActive(active === false);
    }, timeMs);

    return (classValidation);
  };

  return (
    <div id="DropDownMainContainer">
      <div id="DropDownContainer">
        <p>{' '}</p>
      </div>
      <button id="dropDownButton" onClick={ onClick } style={ { color: buttonColor } }>
        <IoIosArrowDropdownCircle />
      </button>
      <div id="navContainer">
        {
          active
            ? (
              <div className="navigationLinksDiv">
                <HashLink smooth to="/#" className="navigationLinks">
                  <AiFillHome />
                  <h4>Home</h4>
                </HashLink>
                <HashLink smooth to="/#projects" className="navigationLinks">
                  <RiGitRepositoryFill />
                  <h4>Projects</h4>
                </HashLink>
                <Link to="/aboutMe" className="navigationLinks">
                  <SiAboutdotme />
                  <h4>Sobre Mim</h4>
                </Link>
                <Link to="/contact" className="navigationLinks">
                  <RiContactsFill />
                  <h4>Contato</h4>
                </Link>
              </div>
            )
            : <div />
        }
      </div>
    </div>
  );
}

export default withRouter(DropDown);
