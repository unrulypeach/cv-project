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
            value={currState.name}
          />
        </label>
        <label>
          Position
          <input
            type="text"
            value={currState.position}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={currState.city}
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={currState.state}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            value={currState.start}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={currState.end}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={currState.points[0]}
          />
        </label>
      </form>
    );
  }

  render() {
    return (
      <div>
        <h2>Experience</h2>
        <hr />
        {this.renderExperience()}
      </div>
    );
  }
}
