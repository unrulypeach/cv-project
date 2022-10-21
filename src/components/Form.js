/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import FormHeader from './FormHeader';
import FormEducation from './FormEducation';
import FormSkills from './FormSkills';
import FormExperience from './FormExperience';

export default class Form extends Component {
  render() {
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
          togExp={this.props.toggleExpDisplay}
          expStatus={this.props.currState.showExperience}
          changeFunc={this.props.changeExpFunc}
          newDescript={this.props.newExpDescript}
          newExp={this.props.newExp}
        />
      </div>
    );
  }
}
