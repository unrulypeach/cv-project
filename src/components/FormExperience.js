/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ShowhHideBtn from '../utils/ShowHideBtn';
import {
  hoverEnter, hoverLeave, hoverEnterRm, hoverLeaveRm,
} from '../utils/SpecialHover';

export default function FormExperience(props) {
  const {
    expState, changeFunction, togExp, expStatus, newExp, newDescript, rmDescript, changePt, rmExp,
  } = props;

  function renderDescriptionInput(arrItem, id, ind) {
    return (
      <label key={ind}>
        Description
        <input
          type="text"
          value={arrItem}
          onChange={(e) => changePt(e, id, ind)}
        />
      </label>
    );
  }

  function renderExperience(obj) {
    const points = [];

    for (let i = 0; i < obj.points.length; i += 1) {
      points.push(renderDescriptionInput(obj.points[i], obj.id, i));
    }

    return (
      <form key={obj.id} className="form-piece-container" id={`form${obj.id}`}>
        <label>
          Employer
          <input
            type="text"
            value={obj.name}
            onChange={(e) => changeFunction(e, 'name', obj.id)}
          />
        </label>
        <label>
          Position
          <input
            type="text"
            value={obj.position}
            onChange={(e) => changeFunction(e, 'position', obj.id)}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={obj.city}
            onChange={(e) => changeFunction(e, 'city', obj.id)}
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={obj.state}
            onChange={(e) => changeFunction(e, 'state', obj.id)}
          />
        </label>
        <label>
          Start Date
          <input
            type="text"
            value={obj.start}
            onChange={(e) => changeFunction(e, 'start', obj.id)}
          />
        </label>
        <label>
          End Date
          <input
            type="text"
            value={obj.end}
            onChange={(e) => changeFunction(e, 'end', obj.id)}
          />
        </label>
        {points}
        <div className="col-span-full flex justify-around py-3">
          <button
            type="button"
            className="bg-silver rounded px-5 py-1"
            onClick={() => newDescript(obj.id)}
          >
            add description
          </button>
          <button
            type="button"
            className="bg-sgrey rounded px-5 py-1 pointer-events-auto"
            onClick={() => rmDescript(obj.id)}
            onMouseEnter={() => hoverEnter(`form${obj.id}`)}
            onMouseLeave={() => hoverLeave(`form${obj.id}`)}
          >
            remove last description
          </button>
          <button
            type="button"
            className="bg-red rounded px-5 py-1 pointer-events-auto"
            onClick={() => rmExp(obj.id)}
            onMouseEnter={() => hoverEnterRm(`form${obj.id}`)}
            onMouseLeave={() => hoverLeaveRm(`form${obj.id}`)}
          >
            remove experience
          </button>
        </div>
      </form>
    );
  }

  const children = [];
  expState.forEach((ele) => children.push(renderExperience(ele)));

  return (
    <div id="formExperience" className="form-section">
      <div className="header-container">
        <h2 className="text-xl font-bold">Experience</h2>
        {ShowhHideBtn(expStatus, togExp)}
      </div>
      <hr />
      <div className="section-content" style={{ display: expStatus ? 'block' : 'none' }}>
        {children}
        <div className="newBtnWrap">
          <button
            type="button"
            className="newBtn"
            onClick={() => newExp(expState.length)}
          >
            Add new experience
          </button>
        </div>
      </div>
    </div>
  );
}
