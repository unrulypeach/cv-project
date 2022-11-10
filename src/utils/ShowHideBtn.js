import React from 'react';

export default function ShowhHideBtn(xStatus, togXfn) {
  return (
    <button
      type="button"
      onClick={togXfn}
    >
      {xStatus ? 'hide' : 'show'}
    </button>
  );
}
