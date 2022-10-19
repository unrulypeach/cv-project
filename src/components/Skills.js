/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Skills extends Component {
  renderSkill(skillObj) {
    return (
      <div key={skillObj.id}>
        {skillObj.title}
        {' '}
        -
        {' '}
        {skillObj.descript}
      </div>
    );
  }

  render() {
    const { skills } = this.props;
    const contents = [];
    // for (let i=0; i<skills.length; i+=1){
    // }
    skills.forEach((ele) => contents.push(this.renderSkill(ele)));
    return (
      <div>
        <h2 className="templateTitle"> Skills </h2>
        <hr />
        {contents}
      </div>
    );
  }
}
