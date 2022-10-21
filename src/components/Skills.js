/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Skills extends Component {
  renderSkill(skillObj) {
    return (
      <div key={skillObj.id} className="tempSkillsItem component">
        <span className="skills title">
          {skillObj.title}
        </span>
        <span>
          {' - '}
        </span>
        <span className="skills descript">
          {skillObj.descript}
        </span>
      </div>
    );
  }

  render() {
    const { skills } = this.props;
    const contents = [];
    skills.forEach((ele) => contents.push(this.renderSkill(ele)));
    return (
      <div id="tempSkills">
        <h2 className="templateTitle"> SKILLS </h2>
        <hr />
        {contents}
      </div>
    );
  }
}
