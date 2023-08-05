import React from 'react';

export default function ShowhHideBtn(xStatus, togXfn) {
  return (
    <button
      type="button"
      onClick={togXfn}
      className="bg-[#f7e3d4] hover:bg-[#fccaa6] px-2 rounded-lg"
    >
      {xStatus ? 'hide' : 'show'}
    </button>
  );
}
