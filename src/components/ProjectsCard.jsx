import PropTypes from 'prop-types';

import { VscGithub } from 'react-icons/vsc';
import { MdOpenInNew } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';

import useProjectCardFunctions from '../hooks/useProjectCardFunctions';
import './Styles/ProjectsCard.css';
import '../App.css';

function ProjectCard({ projectsData }) {
  const { ref, onClick, darkLightMode, frontBack } = useProjectCardFunctions();

  return (
    <div id="projects" ref={ ref }>

      <h2 className={ `${darkLightMode}BackGround` }>
        <span className="trybeGreen" style={ { position: 'relative', bottom: '2px' } }>
          <FaLongArrowAltRight />
        </span>
        <span className="aqua"> Projects </span>
        <span className="jsPurple">
          git:(
          <span className="red">main</span>
          )
        </span>
        {' '}
        ls
      </h2>

      <div className="FrontBackButtons">
        <button
          className={ `${darkLightMode}BackGround ${darkLightMode}Icons` }
          onClick={ () => onClick(true) }
          disabled={ frontBack }
        >
          <h4>Projetos FrontEnd</h4>
        </button>
        <button
          className={ `${darkLightMode}BackGround ${darkLightMode}Icons` }
          onClick={ () => onClick(false) }
          disabled={ !frontBack }
        >
          <h4>Projetos BackEnd</h4>
        </button>
      </div>

      <div id="projects-div">
        {
          projectsData.map((proj, index) => (
            <ul key={ index } className={ `${darkLightMode}BackGround` }>
              <li>
                <h3>{ proj.name }</h3>
                <img src={ proj.gif } alt={ `${proj.name} video` } />
                <p className="projectDescription">{ proj.description }</p>
                <section className="project-links">
                  <a
                    href={ proj.github }
                    rel="noreferrer"
                    className="white"
                    target="_blank"
                  >
                    <VscGithub className={ `${darkLightMode}Icons` } />
                  </a>
                  <a
                    href={ proj.link }
                    rel="noreferrer"
                    className="white"
                    target="_blank"
                  >
                    <MdOpenInNew className={ `${darkLightMode}Icons` } />
                  </a>
                </section>
              </li>
            </ul>
          ))
        }
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  projectsData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    gif: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    github: PropTypes.string,
  })),
}.isRequired;

export default ProjectCard;
