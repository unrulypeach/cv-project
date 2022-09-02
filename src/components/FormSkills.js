/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormSkills extends Component {
  renderSkills() {
    const { currState, changeFunc } = this.props;
    return (
      <form className="form-piece-container">
        <label>
          Title
          <input
            type="text"
            value={currState.example}
            onChange={(e) => changeFunc(e, 'title')}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={currState.example}
            onChange={(e) => changeFunc(e, 'descript')}
          />
        </label>
      </form>
    );
  }

  render() {
    return (
      this.renderSkills()
    );
  }
}
