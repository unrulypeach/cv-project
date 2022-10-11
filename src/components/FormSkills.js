/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormSkills extends Component {
  renderSkills(ind) {
    const { currState } = this.props;
    return (
      <div key={ind}>
        <form className="form-piece-container">
          <label>
            Title
            <input
              type="text"
              value={currState[ind].title}
              // onCHange = find index and change title
              onChange={(e) => this.props.changeFunc(e, 'title', ind)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              value={currState[ind].descript}
              onChange={(e) => this.props.changeFunc(e, 'descript', ind)}
            />
          </label>
        </form>
      </div>
    );
  }

  render() {
    // const { addChild } = this.props;
    const children = [];

    for (let i = 0; i < this.props.currState.length; i += 1) {
      children.push(this.renderSkills(i));
    }

    return (
      <>
        <h2>Skills</h2>
        {children}
        <button
          type="button"
          onClick={(e) => { this.props.newSkill(e, this.props.currState.length + 1); }}
        >
          +
        </button>
      </>
    );
  }
}
