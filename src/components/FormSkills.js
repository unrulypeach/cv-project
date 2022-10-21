/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormSkills extends Component {
  renderSkills(ind) {
    const { currState } = this.props;
    return (
      <form key={ind} className="form-piece-container">
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
        {/* <hr /> */}
      </form>
    );
  }

  render() {
    const children = [];

    for (let i = 0; i < this.props.currState.length; i += 1) {
      children.push(this.renderSkills(i));
    }

    return (
      <div id="formSkills" className="form-section">
        <div className="header-container">
          <h2>Skills</h2>
          <button
            type="button"
            onClick={() => this.props.togSkill()}
          >
            {this.props.skillStatus ? 'hide' : 'show'}
          </button>
        </div>
        <hr />
        <div className="section-content" style={{ display: this.props.skillStatus ? 'block' : 'none' }}>
          {children}
          <button
            type="button"
            onClick={() => this.props.newSkill(this.props.currState.length)}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
