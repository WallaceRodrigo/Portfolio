import { withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IoIosArrowDown } from 'react-icons/io';
import { RiGitRepositoryFill, RiContactsFill } from 'react-icons/ri';
import { SiAboutdotme } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import './Styles/DropDown.css';
import '../App.css';
import useDropDownFunctions from '../hooks/useDropDownFunctions';

function DropDown() {
  const { onClick, active, darkLightMode } = useDropDownFunctions();

  return (
    <div id="DropDownMainContainer">
      <div id="DropDownContainer" className={ `${darkLightMode}AlternativeBackGround` }>
        <p>{' '}</p>
      </div>
      <button
        id="dropDownButton"
        className={ `${darkLightMode}Icons` }
        onClick={ onClick }
      >
        <IoIosArrowDown />
      </button>
      <div id="navContainer">
        {
          active
            ? (
              <div
                className={ `navigationLinksDiv ${darkLightMode}AlternativeBackGround` }
              >
                <HashLink smooth to="/#" className="navigationLinks">
                  <AiFillHome />
                  <h4>Home</h4>
                </HashLink>
                <HashLink smooth to="/#projects" className="navigationLinks">
                  <RiGitRepositoryFill />
                  <h4>Projects</h4>
                </HashLink>
                <HashLink to="/aboutMe/#" className="navigationLinks">
                  <SiAboutdotme />
                  <h4>Sobre Mim</h4>
                </HashLink>
                <HashLink to="/contact/#" className="navigationLinks">
                  <RiContactsFill />
                  <h4>Contato</h4>
                </HashLink>
              </div>
            )
            : <div />
        }
      </div>
    </div>
  );
}

export default withRouter(DropDown);
