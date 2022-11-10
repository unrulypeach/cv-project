/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import uniqid from 'uniqid';

export default function Experience(props) {
  const { expState } = props;
  function renderPoint(arrItem) {
    return (
      <div key={uniqid()}>
        {'- '}
        {arrItem}
      </div>
    );
  }

  function renderExperience(obj) {
    const points = [];

    for (let i = 0; i < obj.points.length; i += 1) {
      points.push(renderPoint(obj.points[i]));
    }
    return (
      <div key={uniqid()} className="tempExpItem component">
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
            {obj.position}
          </span>
          <span className="text-sm">
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

  const contents = [];
  expState.forEach((ele) => contents.push(renderExperience(ele)));
  return (
    <div className="template-section">
      <h2 className="templateTitle"> EXPERIENCE </h2>
      <hr />
      {contents}
    </div>
  );
}
