/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ShowhHideBtn from '../utils/ShowHideBtn';

export default function FormEducation(props) {
  const {
    education, changeFunction, togEdu, eduStatus, newEdu, rmEdu,
  } = props;

  function renderEducation(ind) {
    return (
      <form key={ind} className="form-piece-container grid grid-cols-2">
        <label>
          School
          <input
            type="text"
            value={education[ind].name}
            onChange={(e) => changeFunction(e, 'name', ind)}
          />
        </label>
        <label>
          Degree
          <input
            type="text"
            value={education[ind].degree}
            onChange={(e) => changeFunction(e, 'degree', ind)}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={education[ind].city}
            onChange={(e) => changeFunction(e, 'city', ind)}
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={education[ind].state}
            onChange={(e) => changeFunction(e, 'state', ind)}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            value={education[ind].start}
            onChange={(e) => changeFunction(e, 'start', ind)}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={education[ind].end}
            onChange={(e) => changeFunction(e, 'end', ind)}
          />
        </label>
        <label>
          Expected End Date
          <input
            type="text"
            value={education[ind].expectedEnd}
            onChange={(e) => changeFunction(e, 'expectedEnd', ind)}
          />
        </label>
        <button
          type="button"
          className="fullLength-btn remove-btn"
          onClick={() => rmEdu(ind)}
        >
          remove
        </button>
      </form>
    );
  }

  const children = [];

  for (let i = 0; i < education.length; i += 1) {
    children.push(renderEducation(i));
  }

  return (
    <div id="formEducation" className="form-section">
      <div className="header-container">
        <h2>Education</h2>
        {ShowhHideBtn(eduStatus, togEdu)}
      </div>
      <hr />
      <div className="section-content" style={{ display: eduStatus ? 'block' : 'none' }}>
        {children}
        <button
          type="button"
          onClick={() => newEdu(education.length)}
        >
          +
        </button>
      </div>
    </div>
  );
}
