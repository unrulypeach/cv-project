/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SubHeader from './SubHeader';

export default class Subsection extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <SubHeader title={title} />
      </div>
    );
  }
}
