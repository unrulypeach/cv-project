/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormSkills extends Component {
  renderSkills() {
    const { currState } = this.props;
    return (
      <div>
        <form className="form-piece-container">
          <label>
            Title
            <input
              type="text"
              value={currState.title}
              onChange={(e) => currState.changeFunc(e, 'title')}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              value={currState.descript}
              onChange={(e) => currState.changeFunc(e, 'descript')}
            />
          </label>
        </form>
      </div>
    );
  }

  render() {
    const { addChild } = this.props;
    return (
      <>
        <h2>Skills</h2>
        {this.renderSkills()}
        <button
          type="button"
          onClick={addChild}
        >
          +
        </button>
      </>
    );
  }
}
