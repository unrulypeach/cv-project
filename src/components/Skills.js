/* eslint-disable react/prop-types */
import React from 'react';

export default function Skills(props) {
  const { skillState } = props;

  function renderSkill(skillObj) {
    return (
      <div key={skillObj.id} className="tempSkillsItem px-2">
        <span className="font-bold text-sm">
          {skillObj.title}
        </span>
        {skillObj.title ? (<span>{' - '}</span>) : ''}
        <span
          className="whitespace-normal text-sm"
        >
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
      <hr className="pb-2" />
      {contents}
    </div>
  );
}
