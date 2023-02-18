import React from 'react';
import './Styles/NamePresentation.css';

function NamePresentation() {
  return (
    <div id="initialPage">
      <h1>
        <span>
          <span className="purple">&lt;</span>
          {' '}
          Wallace Rodrigo
          {' '}
          <span className="purple">/&gt;</span>
        </span>
      </h1>
      <h2 id="firstH2">
        Web Developer |
        {' '}
        <a href="https://www.betrybe.com/" target="_blank" className="trybe trybeGreen" rel="noreferrer">Trybe</a>
        {' '}
        Student
      </h2>
      <a href="#projects">
        <h3>
          <button id="startBtn">
            Start
          </button>
        </h3>
      </a>
    </div>
  );
}

export default NamePresentation;
