import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import NamePresentation from '../components/NamePresentation';
import ProjectCard from '../components/ProjectsCard';

function Home({ history }) {
  return (
    <div>
      <Header />
      <NamePresentation />
      <ProjectCard />
      <button
        id="startBtn"
        onClick={ () => history.push('/aboutMe') }
      >
        Sobre Mim
      </button>
      <button
        id="startBtn"
        onClick={ () => history.push('/Contact') }
      >
        Contato
      </button>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Home);
