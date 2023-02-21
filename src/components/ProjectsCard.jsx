import React, { useContext, useEffect } from 'react';

import { VscGithub } from 'react-icons/vsc';
import { MdOpenInNew } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { useInView } from 'react-intersection-observer';
import { projectsData } from '../content/projectsData';
import './Styles/ProjectsCard.css';
import '../App.css';
import DarkLightMode from '../context/DarkLightMode';

function ProjectCard() {
  const threshold = 0.3;
  const { ref, inView, entry } = useInView({ threshold });
  const { darkLightMode } = useContext(DarkLightMode);

  useEffect(() => {
    if (inView) {
      entry.target.classList.add('hiddenOff');
      ref('');
    }
  }, [entry, inView, ref]);

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

export default ProjectCard;
