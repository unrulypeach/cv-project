/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Education extends Component {
  // eslint-disable-next-line class-methods-use-this
  renderEducationTemp(obj) {
    return (
      <>
        <div>
          <span>
            {obj.name}
            {' '}
            |
            {' '}
            {obj.city}
            ,
            {' '}
            {obj.state}
          </span>
          <span>
            {obj.start}
            {' '}
            -
            {' '}
            {obj.end}
          </span>
        </div>
        <div>
          <span>
            {obj.degree}
          </span>
          <span>
            {obj.expectedEnd}
          </span>
        </div>
      </>
    );
  }

  render() {
    const { info } = this.props;
    return (
      <>
        <h2 className="templateTitle"> Education </h2>
        <hr />
        {this.renderEducationTemp(info)}
      </>
    );
  }
}
