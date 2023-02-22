import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import NamePresentation from '../components/NamePresentation';
import ProjectCard from '../components/ProjectsCard';
import { projectsFront } from '../content/projectsDataFrontEnd';
import { projectsBack } from '../content/projectsDataBackEnd';
import FrontBackToggle from '../context/FrontBackToggle';

function Home() {
  const [frontBack, setFrontBack] = useState(true);

  const value = useMemo(() => ({
    frontBack, setFrontBack,
  }), [frontBack]);

  return (
    <FrontBackToggle.Provider value={ value }>
      <div style={ { overflow: 'hidden' } }>
        <Header />
        <NamePresentation />
        {
          frontBack === true
            ? <ProjectCard projectsData={ projectsFront } />
            : <ProjectCard projectsData={ projectsBack } />
        }
      </div>
    </FrontBackToggle.Provider>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Home);
