/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormExperience extends Component {
  // eslint-disable-next-line react/no-unused-class-component-methods
  renderDescriptionInput(arrItem) {
    return (
      <label>
        Description
        <input
          type="text"
          value={arrItem}
        />
      </label>
    );
  }

  renderExperience(obj) {
    const points = [];

    for (let i = 0; i < obj.points.length; i += 1) {
      points.push(this.renderDescriptionInput(obj.points[i]));
    }

    return (
      <form className="form-piece-container">
        <label>
          Employer
          <input
            type="text"
            value={obj.name}
          />
        </label>
        <label>
          Position
          <input
            type="text"
            value={obj.position}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={obj.city}
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={obj.state}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            value={obj.start}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={obj.end}
          />
        </label>
        {points}
        <button
          type="button"
          className="fullLength-btn"
        >
          add descriptions
        </button>
      </form>
    );
  }

  render() {
    const children = [];

    // for (let i = 0; i < this.props.currState.length; i += 1) {
    //   children.push(this.renderExperience(this.props.currState[i]));
    // }
    const { currState } = this.props;
    currState.forEach((ele) => children.push(this.renderExperience(ele)));

    return (
      <div id="formExperience" className="form-section">
        <h2>Experience</h2>
        <hr />
        <button
          type="button"
        >
          show/hide
        </button>
        <div className="section-content">
          {children}
        </div>
      </div>
    );
  }
}
