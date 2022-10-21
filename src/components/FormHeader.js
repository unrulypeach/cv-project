/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import '../styles/Form.css';

export default class FormHeader extends Component {
  renderHeaderPc(name) {
    const { header } = this.props;
    return (
      <label className="form-piece">
        {name}
        <input
          type="text"
          value={header[name.toLowerCase()]}
          onChange={(e) => this.props.changeFunction(e, name.toLowerCase())}
        />
      </label>
    );
  }

  render() {
    return (
      <div id="formHeader">
        <h2> Identification </h2>
        <hr />
        <form className="form-piece-container">
          {this.renderHeaderPc('First')}
          {this.renderHeaderPc('Last')}
          {this.renderHeaderPc('Email')}
          {this.renderHeaderPc('Github')}
        </form>
      </div>
    );
  }
}
