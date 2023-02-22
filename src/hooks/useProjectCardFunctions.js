import { useContext, useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import DarkLightMode from '../context/DarkLightMode';
import FrontBackToggle from '../context/FrontBackToggle';

function useProjectCardFunctions() {
  const threshold = 0.3;
  const { ref, inView, entry } = useInView({ threshold });
  const { darkLightMode } = useContext(DarkLightMode);
  const { frontBack, setFrontBack } = useContext(FrontBackToggle);

  useEffect(() => {
    if (inView) {
      entry.target.classList.add('hiddenOff');
      ref('');
    }
  }, [entry, inView, ref]);

  const [btnProjects, setBtnProjects] = useState(true);
  const onClick = (status) => {
    const projectsCards = document.querySelector('#projects-div');
    if (btnProjects) {
      projectsCards.classList.remove('slideProjectsDiv2');
      projectsCards.classList.add('slideLeaveProjectsDiv2');
    }

    if (!btnProjects) {
      projectsCards.classList.remove('slideProjectsDiv');
      projectsCards.classList.add('slideLeaveProjectsDiv');
    }
    setBtnProjects(status);

    const ms = 400;
    setTimeout(() => {
      setFrontBack(status);

      if (frontBack) {
        projectsCards.classList.remove('slideLeaveProjectsDiv2');
        projectsCards.classList.remove('slideProjectsDiv2');
        projectsCards.classList.add('slideProjectsDiv');
      }

      if (!frontBack) {
        projectsCards.classList.remove('slideLeaveProjectsDiv');
        projectsCards.classList.remove('slideProjectsDiv');
        projectsCards.classList.add('slideProjectsDiv2');
      }
    }, ms);
  };

  return {
    ref, onClick, darkLightMode, frontBack,
  };
}

export default useProjectCardFunctions;
