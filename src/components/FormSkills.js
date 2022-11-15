/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { GoTrashcan } from 'react-icons/go';
import ShowHideBtn from '../utils/ShowHideBtn';

export default function FormSkills(props) {
  const {
    skillState, changeFunction, togSkill, skillStatus, newSkill, rmSkill,
  } = props;
  function renderSkills(ind) {
    return (
      <form key={ind} className="flex pointer-events-none  hover:bg-lred">
        <label className="basis-45">
          Title
          <input
            type="text"
            value={skillState[ind].title}
            onChange={(e) => changeFunction(e, 'title', ind)}
          />
        </label>
        <label className="basis-45">
          Description
          <input
            type="text"
            value={skillState[ind].descript}
            onChange={(e) => changeFunction(e, 'descript', ind)}
          />
        </label>
        <button
          type="button"
          className="remove-btn h-7 basis-10 self-end mb-2 pointer-events-auto flex justify-center items-center"
          onClick={() => rmSkill(ind)}
        >
          <GoTrashcan
            size="24"
            className="text-center"
          />
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
        <h2 className="text-xl font-bold">Skills</h2>
        {ShowHideBtn(skillStatus, togSkill)}
      </div>
      <hr />
      <div className="section-content" style={{ display: skillStatus ? 'block' : 'none' }}>
        {getChildren()}
        <div className="newBtnWrap">
          <button
            type="button"
            className="newBtn"
            onClick={() => newSkill(skillState.length)}
          >
            Add new skill
          </button>
        </div>
      </div>
    </div>
  );
}
