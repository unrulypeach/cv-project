/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class FormEducation extends Component {
  renderEducation(ind) {
    const { education } = this.props;

    return (
      <form key={ind} className="form-piece-container">
        <label>
          School
          <input
            type="text"
            value={education[ind].name}
            onChange={(e) => this.props.changeFunction(e, 'name', ind)}
          />
        </label>
        <label>
          Degree
          <input
            type="text"
            value={education[ind].degree}
            onChange={(e) => this.props.changeFunction(e, 'degree', ind)}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={education[ind].city}
            onChange={(e) => this.props.changeFunction(e, 'city', ind)}
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={education[ind].state}
            onChange={(e) => this.props.changeFunction(e, 'state', ind)}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            value={education[ind].start}
            onChange={(e) => this.props.changeFunction(e, 'start', ind)}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={education[ind].end}
            onChange={(e) => this.props.changeFunction(e, 'end', ind)}
          />
        </label>
        <label>
          Expected End Date
          <input
            type="text"
            value={education[ind].expectedEnd}
            onChange={(e) => this.props.changeFunction(e, 'expectedEnd', ind)}
          />
        </label>
        {/* <hr /> */}
      </form>
    );
  }

  render() {
    const children = [];

    for (let i = 0; i < this.props.education.length; i += 1) {
      children.push(this.renderEducation(i));
    }

    return (
      <div id="formEducation" className="form-section">
        <div className="header-container">
          <h2>Education</h2>
          <button
            type="button"
            onClick={() => this.props.togEdu()}
          >
            {this.props.eduStatus ? 'hide' : 'show'}
          </button>
        </div>
        <hr />
        <div className="section-content" style={{ display: this.props.eduStatus ? 'block' : 'none' }}>
          {children}
          <button
            type="button"
            onClick={() => { this.props.newEdu(this.props.education.length); }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
