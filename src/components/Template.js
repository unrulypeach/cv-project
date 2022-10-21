/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/Template.css';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

export default class Template extends Component {
  render() {
    const { currState } = this.props;
    return (
      <div className="Template">
        <div className="Template-container">
          <Header
            first={currState.first}
            last={currState.last}
            email={currState.email}
            github={currState.github}
          />
          <Education
            title="Education"
            education={currState.education}
          />
          <Experience
            exp={currState.experience}
          />
          <Skills
            skills={currState.skills}
          />
        </div>
      </div>
    );
  }
}
