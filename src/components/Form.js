/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import FormHeader from './FormHeader';
import FormEducation from './FormEducation';
import FormSkills from './FormSkills';
/* import FormExperience from './FormExperience';
import FormProjects from './FormProjects'; */

export default class Form extends Component {
  render() {
    /* const children = [];

    // eslint-disable-next-line react/destructuring-assignment
    for (let i = 0; i < this.state.skills.numChildren; i += 1) {
      children.push(<FormSkills />);
    } */
    /* const {
      education, skills, experience, projects,
    } = this.props; */
    return (
      <div className="Form">
        <FormHeader
          header={this.props.currState}
          changeFunc={this.props.changeFunc()}
        />
        <FormEducation
          education={this.props.currState.education}
        />
        <FormSkills
          /* changeFunc={this.props.changeFunc}
          addChild={() => this.onAddChild()}
          newObj={(ev, key) => this.handleNewObj(ev, key)} */
          currState={this.props}
        />
        {/* <FormExperience
          currState={experience}
        />
        <FormProjects
          currState={projects}
        /> */}
      </div>
    );
  }
}
