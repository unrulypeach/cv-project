/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class FormEducation extends Component {
  renderEducation() {
    const { education } = this.props;

    return (
      <form className="form-piece-container">
        <label>
          School
          <input
            type="text"
            value={education.name}
            onChange={(e) => this.props.changeFunction(e, 'name')}
          />
        </label>
        <label>
          Degree
          <input
            type="text"
            value={education.degree}
            onChange={(e) => this.props.changeFunction(e, 'degree')}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={education.city}
            onChange={(e) => this.props.changeFunction(e, 'city')}
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={education.state}
            onChange={(e) => this.props.changeFunction(e, 'state')}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            value={education.start}
            onChange={(e) => this.props.changeFunction(e, 'start')}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={education.end}
            onChange={(e) => this.props.changeFunction(e, 'end')}
          />
        </label>
        <label>
          Expected End Date
          <input
            type="text"
            value={education.expectedEnd}
            onChange={(e) => this.props.changeFunction(e, 'expectedEnd')}
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
