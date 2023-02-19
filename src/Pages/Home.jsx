import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import NamePresentation from '../components/NamePresentation';
import ProjectCard from '../components/ProjectsCard';

function Home() {
  return (
    <div style={ { overflow: 'hidden' } }>
      <Header />
      <NamePresentation />
      <ProjectCard />
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Home);
