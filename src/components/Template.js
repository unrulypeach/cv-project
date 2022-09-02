/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/Template.css';
import Header from './Header';
import Subsection from './Subsection';
import Skills from './Skills';

export default class Template extends Component {
  render() {
    const { currState } = this.props;
    return (
      <div className="Template-container">
        <Header
          first={currState.first}
          last={currState.last}
          email={currState.email}
          github={currState.github}
        />
        <Subsection className="Education" title="Education" />
        <Subsection title="Skills" />
        <Skills
          skill={currState.skills}
        />
        <Subsection title="Experience" />
      </div>
    );
  }
}
