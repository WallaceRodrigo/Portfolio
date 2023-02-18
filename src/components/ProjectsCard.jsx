import React, { useEffect } from 'react';

import { VscGithub } from 'react-icons/vsc';
import { MdOpenInNew } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { projectsData } from '../content/projectsData';
import './Styles/ProjectsCard.css';

function ProjectCard() {
  const middle = 0.5;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio >= middle) {
      entries[0].target.classList.add('hiddenOff');
    }
  }, {
    threshold: 0.5,
  });

  useEffect(() => {
    observer.observe(document.querySelector('#projects'));

    // MODELO PARA MAIS DE UM ELEMENTO
    // const observer = new IntersectionObserver((entries) => {
    //   console.log(entries);
    //   entries.map((entry) => {
    //     if (entry.intersectionRatio >= 1) {
    //       entry.target.classList.add('hiddenOff');
    //     }
    //     return 0;
    //   });
    // }, {
    //   threshold: 1,
    // });

    // Array.from(document.querySelectorAll('#projects')).map((el) => {
    //   observer.observe(el);
    //   return console.log(el);
    // });
  });

  return (
    <div id="projects" className="hidden">

      <h2>
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
        <ul>
          {
            projectsData.map((proj) => (
              <li key={ proj.id }>
                <h3>{ proj.name }</h3>
                <img src={ proj.gif } alt={ `${proj.name} video` } />
                <p>{ proj.description }</p>
                <section className="project-links">
                  <a
                    href={ proj.github }
                    rel="noreferrer"
                    className="white"
                    target="_blank"
                  >
                    <VscGithub />
                  </a>
                  <a
                    href={ proj.link }
                    rel="noreferrer"
                    className="white"
                    target="_blank"
                  >
                    <MdOpenInNew />
                  </a>
                </section>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
