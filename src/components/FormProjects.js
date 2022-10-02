/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormProjects extends Component {
  renderProjects() {
    const { currState } = this.props;

    return (
      <form className="form-piece-container">
        <label>
          Name
          <input
            type="text"
            value={currState[0].name}
          />
        </label>
        <label>
          Caption
          <input
            type="text"
            value={currState[0].position}
          />
        </label>
        <label>
          Date
          <input
            type="text"
            value={currState[0].date}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={currState[0].descriptions[0]}
          />
        </label>
      </form>
    );
  }

  render() {
    return (
      <>
        <h2>Projects</h2>
        {this.renderProjects()}
      </>
    );
  }
}
