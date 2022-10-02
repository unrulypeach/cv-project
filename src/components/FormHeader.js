/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import '../styles/Form.css';

export default class FormHeader extends Component {
  renderHeaderPc(name) {
    const { currState, changeFunc } = this.props;
    return (
      <label className="form-piece">
        {name}
        <input
          type="text"
          value={currState[name]}
          onChange={(e) => changeFunc(e, name)}
        />
      </label>
    );
  }

  render() {
    return (
      <div>
        <h2> Identification </h2>
        <form className="form-piece-container">
          {this.renderHeaderPc('first')}
          {this.renderHeaderPc('last')}
          {this.renderHeaderPc('email')}
          {this.renderHeaderPc('github')}
        </form>
      </div>
    );
  }
}
