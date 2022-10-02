/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormExperience extends Component {
  renderExperience() {
    const { currState } = this.props;
    return (
      <form className="form-piece-container">
        <label>
          Employer
          <input
            type="text"
            value={currState[0].name}
          />
        </label>
        <label>
          Position
          <input
            type="text"
            value={currState[0].position}
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
          Description
          <input
            type="text"
            value={currState[0].points[0]}
          />
        </label>
      </form>
    );
  }

  render() {
    return (
      <>
        <h2>Experience</h2>
        {this.renderExperience()}
      </>
    );
  }
}
