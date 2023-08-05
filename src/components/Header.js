/* eslint-disable react/prop-types */
import React from 'react';

export default function Header(props) {
  const {
    headerState: {
      first, last, email, github,
    },
  } = props;
  return (
    <div className="tempHeader text-center py-6">
      <h1 className="font-bold text-2xl">
        {first}
        {' '}
        {last}
      </h1>
      <span className="text-base">
        {email}
        {' · '}
        {github}
      </span>
    </div>
  );
}
