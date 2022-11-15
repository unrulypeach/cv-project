/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { GoTrashcan } from 'react-icons/go';
import ShowhHideBtn from '../utils/ShowHideBtn';

export default function FormEducation(props) {
  const {
    education, changeFunction, togEdu, eduStatus, newEdu, rmEdu,
  } = props;

  function renderEducation(ind) {
    return (
      <form key={ind} className="form-piece-container pointer-events-none grid grid-cols-2  hover:bg-lred">
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
        <div className="rmBtnWrap pointer-events-none">
          <button
            type="button"
            className="remove-btn pointer-events-auto flex justify-center items-center"
            onClick={() => rmEdu(ind)}
          >
            <GoTrashcan
              size="24"
            />
          </button>
        </div>
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
        <h2 className="text-xl font-bold">Education</h2>
        {ShowhHideBtn(eduStatus, togEdu)}
      </div>
      <hr />
      <div className="section-content" style={{ display: eduStatus ? 'block' : 'none' }}>
        {children}
      </div>
      <div className="newBtnWrap">
        <button
          type="button"
          className="newBtn"
          onClick={() => newEdu(education.length)}
        >
          Add new education
        </button>
      </div>
    </div>
  );
}
