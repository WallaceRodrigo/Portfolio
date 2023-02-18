import React from 'react';
import Header from '../components/Header';
import Infos from '../components/Infos';

function AboutMe() {
  return (
    <div style={ { overflow: 'hidden' } }>
      <Header />
      <Infos />
    </div>
  );
}

export default AboutMe;
