/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ShowHideBtn from '../utils/ShowHideBtn';

export default function FormSkills(props) {
  const {
    skillState, changeFunction, togSkill, skillStatus, newSkill, rmSkill,
  } = props;
  function renderSkills(ind) {
    return (
      <form key={ind} className="form-piece-container">
        <label>
          Title
          <input
            type="text"
            value={skillState[ind].title}
            onChange={(e) => changeFunction(e, 'title', ind)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={skillState[ind].descript}
            onChange={(e) => changeFunction(e, 'descript', ind)}
          />
        </label>
        <button
          type="button"
          className="fullLength-btn remove-btn"
          onClick={() => rmSkill(ind)}
        >
          remove
        </button>
      </form>
    );
  }

  const children = [];

  function getChildren() {
    for (let i = 0; i < skillState.length; i += 1) {
      children.push(renderSkills(i));
    }
    return children;
  }

  return (
    <div className="form-section">
      <div className="header-container">
        <h2>Skills</h2>
        {ShowHideBtn(skillStatus, togSkill)}
      </div>
      <hr />
      <div className="section-content" style={{ display: skillStatus ? 'block' : 'none' }}>
        {getChildren()}
        <button
          type="button"
          onClick={() => newSkill(skillState.length)}
        >
          +
        </button>
      </div>
    </div>
  );
}
