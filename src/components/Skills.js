/* eslint-disable react/prop-types */
import React from 'react';

export default function Skills(props) {
  const { skillState } = props;

  function renderSkill(skillObj) {
    return (
      <div key={skillObj.id} className="tempSkillsItem component">
        <span className="font-bold">
          {skillObj.title}
        </span>
        <span>
          {' - '}
        </span>
        <span>
          {skillObj.descript}
        </span>
      </div>
    );
  }

  const contents = [];
  // skillState.forEach((ele) => contents.push(renderSkill(ele)));
  for (let i = 0; i < skillState.length; i += 1) {
    contents.push(renderSkill(skillState[i]));
  }

  return (
    <div className="template-section">
      <h2 className="templateTitle"> SKILLS </h2>
      <hr />
      {contents}
    </div>
  );
}
