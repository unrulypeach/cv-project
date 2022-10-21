/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Education extends Component {
  // eslint-disable-next-line class-methods-use-this
  renderEducation(obj) {
    return (
      <div className="tempEduItem component">
        <div className="tempItem-flexContainer">
          <span className="edu title">
            {obj.name}
          </span>
          <span className="edu title">
            {obj.city}
            ,
            {' '}
            {obj.state}
          </span>
        </div>
        <div className="tempItem-flexContainer">
          <span className="sm italic">
            {obj.degree}
          </span>
          <span className="sm">
            {obj.start}
            {' '}
            -
            {' '}
            {obj.end}
          </span>
          {/* <span>
            {obj.expectedEnd}
          </span> */}
        </div>
      </div>
    );
  }

  render() {
    const { education } = this.props;
    const contents = [];
    education.forEach((ele) => contents.push(this.renderEducation(ele)));
    return (
      <div id="tempEdu">
        <h2 className="templateTitle"> EDUCATION </h2>
        <hr />
        {contents}
      </div>
    );
  }
}
