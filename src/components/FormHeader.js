/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ShowhHideBtn from '../utils/ShowHideBtn';

export default function FormHeader(props) {
  const {
    headerState, setHeaderState, togHead, headStatus,
  } = props;
  function renderHeaderPc(name) {
    return (
      <label>
        {name}
        <input
          type="text"
          placeholder={name}
          value={headerState[name.toLowerCase()]}
          onChange={(e) => setHeaderState(e, name.toLowerCase())}
        />
      </label>
    );
  }
  return (
    <div className="form-section">
      <div className="header-container">
        <h2 className="text-lg"> Identification </h2>
        {ShowhHideBtn(headStatus, togHead)}
      </div>
      <hr />
      <form className="form-piece-container" style={{ display: headStatus ? 'block' : 'none' }}>
        {renderHeaderPc('First')}
        {renderHeaderPc('Last')}
        {renderHeaderPc('Email')}
        {renderHeaderPc('Github')}
      </form>
    </div>
  );
}
