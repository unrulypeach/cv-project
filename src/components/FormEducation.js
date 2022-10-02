/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class FormEducation extends Component {
  renderEducation() {
    const { currState } = this.props;

    return (
      <form className="form-piece-container">
        <label>
          School
          <input
            type="text"
            value={currState[0].name}
          />
        </label>
        <label>
          Degree
          <input
            type="text"
            value={currState[0].degree}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={currState[0].city}
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={currState[0].state}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            value={currState[0].start}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={currState[0].end}
          />
        </label>
        <label>
          Expected End Date
          <input
            type="text"
            value={currState[0].expectedEnd}
          />
        </label>
      </form>
    );
  }

  render() {
    return (
      <>
        <h2>Education</h2>
        {this.renderEducation()}
      </>
    );
  }
}
