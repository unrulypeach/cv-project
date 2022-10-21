/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

export default class Experience extends Component {
  renderPoint(arrItem) {
    return (
      <div>
        {'- '}
        {arrItem}
      </div>
    );
  }

  renderExperience(obj) {
    const points = [];

    for (let i = 0; i < obj.points.length; i += 1) {
      points.push(this.renderPoint(obj.points[i]));
    }
    return (
      <div className="tempExpItem component">
        <div className="tempItem-flexContainer">
          <span className="exp title">
            {obj.name}
          </span>
          <span className="exp title">
            {obj.city}
            ,
            {' '}
            {obj.state}
          </span>
        </div>
        <div className="tempItem-flexContainer">
          <span className="sm italic">
            {obj.position}
          </span>
          <span className="sm">
            {obj.start}
            {' - '}
            {obj.end}
          </span>
        </div>
        <div>
          {points}
        </div>
      </div>
    );
  }

  render() {
    const { exp } = this.props;
    const contents = [];
    exp.forEach((ele) => contents.push(this.renderExperience(ele)));
    return (
      <div className="template-section">
        <h2 className="templateTitle"> EXPERIENCE </h2>
        <hr />
        {contents}
      </div>
    );
  }
}
