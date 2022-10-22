/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormExperience extends Component {
  // eslint-disable-next-line react/no-unused-class-component-methods
  renderDescriptionInput(arrItem, id, ind) {
    return (
      <label>
        Description
        <input
          type="text"
          value={arrItem}
          onChange={(e) => this.props.changePt(e, id, ind)}
        />
      </label>
    );
  }

  renderExperience(obj) {
    const points = [];

    for (let i = 0; i < obj.points.length; i += 1) {
      points.push(this.renderDescriptionInput(obj.points[i], obj.id, i));
    }

    return (
      <form className="form-piece-container">
        <label>
          Employer
          <input
            type="text"
            value={obj.name}
            onChange={(e) => this.props.changeFunc(e, 'name', obj.id)}
          />
        </label>
        <label>
          Position
          <input
            type="text"
            value={obj.position}
            onChange={(e) => this.props.changeFunc(e, 'position', obj.id)}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={obj.city}
            onChange={(e) => this.props.changeFunc(e, 'city', obj.id)}
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={obj.state}
            onChange={(e) => this.props.changeFunc(e, 'state', obj.id)}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            value={obj.start}
            onChange={(e) => this.props.changeFunc(e, 'start', obj.id)}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={obj.end}
            onChange={(e) => this.props.changeFunc(e, 'end', obj.id)}
          />
        </label>
        {points}
        {/* <button
          type="button"
          className="fullLength-btn"
          onClick={() => this.props.newDescript(obj.id)}
        >
          add description
        </button> */}
        <button
          type="button"
          className="fullLength-btn remove-btn"
          onClick={() => this.props.rmExp(obj.id)}
        >
          remove
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
        <div className="header-container">
          <h2>Experience</h2>
          <button
            type="button"
            onClick={() => this.props.togExp()}
          >
            {this.props.expStatus ? 'hide' : 'show'}
          </button>
        </div>
        <hr />
        <div className="section-content" style={{ display: this.props.expStatus ? 'block' : 'none' }}>
          {children}
          <button
            type="button"
            onClick={() => this.props.newExp(this.props.currState.length)}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
