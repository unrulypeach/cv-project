/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const {
      first, last, email, github,
    } = this.props;
    return (
      <div className="tempHeader">
        <h1>
          {first}
          {' '}
          {last}
        </h1>
        <span className="sm">
          {email}
          {' '}
          {github}
        </span>
      </div>
    );
  }
}
