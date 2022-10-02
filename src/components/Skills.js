/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div>
        {skill.title}
        {' - '}
        {skill.descript}
      </div>
    );
  }
}
