/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class SubHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="Subheader">
        <h2 className="subTitle">{title}</h2>
        <hr />
      </div>
    );
  }
}
