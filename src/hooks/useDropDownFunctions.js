import { useContext, useEffect } from 'react';
import ActiveDropDown from '../context/ActiveDropDown';
import DarkLightMode from '../context/DarkLightMode';

function useDropDownFunctions() {
  const { active, setActive } = useContext(ActiveDropDown);
  const { darkLightMode } = useContext(DarkLightMode);

  useEffect(() => {
    const mainDiv = document.getElementById('DropDownContainer');
    const button = document.getElementById('dropDownButton');

    if (active === true) {
      mainDiv.classList.add('DropDown');
      button.classList.add('rotate');
    }
  }, [active, darkLightMode]);

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
      const timeMs = 1000;
      setTimeout(() => {
        setActive(active === false);
      }, timeMs);
    } else {
      const timeMs = 500;
      setTimeout(() => {
        setActive(active === false);
      }, timeMs);
    }

    return (classValidation);
  };

  return {
    onClick, active, darkLightMode,
  };
}

export default useDropDownFunctions;
