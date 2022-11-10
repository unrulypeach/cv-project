/* eslint-disable react/prop-types */
import React from 'react';
import uniqid from 'uniqid';

export default function Education(props) {
  const { educationState } = props;
  function renderEducation(obj) {
    return (
      <div key={uniqid()} className="tempEduItem component">
        <div className="tempItem-flexContainer">
          <span className="font-bold">
            {obj.name}
          </span>
          <span className="font-bold">
            {obj.city}
            ,
            {' '}
            {obj.state}
          </span>
        </div>
        <div className="tempItem-flexContainer">
          <span className="text-sm italic">
            {obj.degree}
          </span>
          <span className="text-sm">
            {obj.start}
            {' '}
            -
            {' '}
            {obj.end}
          </span>
          {(obj.expectedEnd === '' ? null : <span>{obj.expectedEnd}</span>)}
        </div>
      </div>
    );
  }

  const contents = [];
  educationState.forEach((ele) => contents.push(renderEducation(ele)));
  return (
    <div id="tempEdu">
      <h2 className="templateTitle"> EDUCATION </h2>
      <hr />
      {contents}
    </div>
  );
}
