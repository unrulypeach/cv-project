/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import FormHeader from './FormHeader';
import FormEducation from './FormEducation';
import FormSkills from './FormSkills';
import FormExperience from './FormExperience';
// import FormProjects from './FormProjects';

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
          changeFunction={this.props.changeFunc}
        />
        <FormEducation
          education={this.props.currState.education}
          changeFunction={this.props.changeEduFunc}
          togEdu={this.props.toggleEduDisplay}
          eduStatus={this.props.currState.showEducation}
          newEdu={this.props.newEdu}
        />
        <FormSkills
          changeFunc={this.props.changeSkillFunc}
          newSkill={this.props.newSkill}
          togSkill={this.props.toggleSkillDisplay}
          skillStatus={this.props.currState.showSkills}
          currState={this.props.currState.skills}
        />
        <FormExperience
          currState={this.props.currState.experience}
        />
        {/* <FormProjects
          currState={projects}
        /> */}
      </div>
    );
  }
}
