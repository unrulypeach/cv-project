/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { GoTrashcan } from 'react-icons/go';
import ShowhHideBtn from '../utils/ShowHideBtn';
import { hoverEnterRm, hoverLeaveRm } from '../utils/SpecialHover';

export default function FormEducation(props) {
  const {
    education, changeFunction, togEdu, eduStatus, newEdu, rmEdu,
  } = props;

  function renderEducation(ind) {
    return (
      <form
        key={ind}
        id={`edu${ind}`}
        className="form-piece-container grid grid-cols-2"
      >
        <label>
          <span className="font-['Roboto-Medium']">School</span>
          <input
            type="text"
            value={education[ind].name}
            onChange={(e) => changeFunction(e, 'name', ind)}
          />
        </label>
        <label>
          <span className="font-['Roboto-Medium']">Degree</span>
          <input
            type="text"
            value={education[ind].degree}
            onChange={(e) => changeFunction(e, 'degree', ind)}
          />
        </label>
        <label>
          <span className="font-['Roboto-Medium']">City</span>
          <input
            type="text"
            value={education[ind].city}
            onChange={(e) => changeFunction(e, 'city', ind)}
          />
        </label>
        <label>
          <span className="font-['Roboto-Medium']">State</span>
          <input
            type="text"
            value={education[ind].state}
            onChange={(e) => changeFunction(e, 'state', ind)}
          />
        </label>
        <label>
          <span className="font-['Roboto-Medium']">Start Date</span>
          <input
            type="text"
            value={education[ind].start}
            onChange={(e) => changeFunction(e, 'start', ind)}
          />
        </label>
        <label>
          <span className="font-['Roboto-Medium']">End Date</span>
          <input
            type="text"
            value={education[ind].end}
            onChange={(e) => changeFunction(e, 'end', ind)}
          />
        </label>
        <label>
          <span className="font-['Roboto-Medium']">Expected End Date</span>
          <input
            type="text"
            value={education[ind].expectedEnd}
            onChange={(e) => changeFunction(e, 'expectedEnd', ind)}
          />
        </label>
        <div className="rmBtnWrap">
          <button
            type="button"
            className="remove-btn ml-1 flex justify-center items-center"
            onClick={() => rmEdu(ind)}
            onMouseEnter={() => hoverEnterRm(`edu${ind}`)}
            onMouseLeave={() => hoverLeaveRm(`edu${ind}`)}
          >
            <GoTrashcan size="24" />
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
      <div
        className="section-content"
        style={{ display: eduStatus ? 'block' : 'none' }}
      >
        {children}
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
    </div>
  );
}
