/* eslint-disable max-len */
import React from 'react';
import './Styles/AboutMe.css';

function Infos() {
  return (
    <div id="aboutMe">
      <h2>
        <span className="trybeGreen"><i className="bi bi-arrow-right-short" /></span>
        <span className="aqua"> WallaceRodrigo </span>
        <span> cat Infos.js</span>
      </h2>

      <div id="aboutMe-div">
        <div>
          <span className="jsPink">const </span>
          <span className="jsPurple">name </span>
          <span className="jsPink"> = </span>
          <span className="jsYellow">{' "Wallace Rodrigo" '}</span>
          <span>;</span>
        </div>
        <div>
          <span className="jsPink">let </span>
          <span className="jsPurple">age </span>
          <span className="jsPink"> = </span>
          <span className="jsPurple">18</span>
          <span>;</span>
        </div>
        <div>
          <span className="jsPink">let </span>
          <span className="jsPurple">state </span>
          <span className="jsPink"> = </span>
          <span className="jsYellow">{' "São Paulo" '}</span>
          <span>;</span>
        </div>
        <div>
          <span className="jsPink">const </span>
          <span className="jsPurple">e-mail </span>
          <span className="jsPink"> = </span>
          <span className="jsYellow">{' "wallacerodrigo2004@gmail.com" '}</span>
          <span>;</span>
        </div>
        <div>
          <span className="jsPink">const </span>
          <span className="jsPurple">github </span>
          <span className="jsPink"> = </span>
          <a className="jsYellow" target="_blank" href="https://github.com/WallaceRodrigo" rel="noreferrer">{' "https://github.com/WallaceRodrigo" '}</a>
          <span>;</span>
        </div>
        <div>
          <span className="jsPink">const </span>
          <span className="jsPurple">Linkedin </span>
          <span className="jsPink"> = </span>
          <a className="jsYellow" target="_blank" href="https://www.linkedin.com/in/wallacerd/" rel="noreferrer">{' "https://www.linkedin.com/in/wallacerd/" '}</a>
          <span>;</span>
        </div>
        <div>
          <span className="jsPink">let </span>
          <span className="jsPurple">experiences </span>
          <span className="jsPink"> = </span>
          <span className="jsYellow">{' "Studying web development on'}</span>
          <a href="https://www.betrybe.com/" target="_blank" className=" trybe jsYellow" rel="noreferrer">{' Trybe" '}</a>
          <span>;</span>
        </div>
        <div>
          <span className="jsPink">let </span>
          <span className="jsPurple">stack </span>
          <span className="jsPink"> = </span>
          <span className="jsYellow">
            <span className="aqua">[</span>
            {' "HTML/CSS", "JsES6", "Jest/TestingLibrary", "React", "Redux", "ReactHooks", "ReactRoutes" '}
            <span className="aqua">]</span>
          </span>
          <span>;</span>
        </div>
      </div>
    </div>
  );
}

export default Infos;
