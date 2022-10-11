/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div>
        <h2 className="templateTitle"> Skills </h2>
        <hr />
        {/* need to filter through skills and display each */}
        {skill.title}
        {' - '}
        {skill.descript}
      </div>
    );
  }
}
