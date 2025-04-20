import React from 'react'

function Header(props) {
  return (
    <div className={props.className}>
      <p className="title text-3xl font-bold text-gray-800 pb-1">ExpertManager</p>
      <p className="subtitle font-mono text-sm text-gray-500">
        Heureux de vous retrouver!
      </p>
      <hr className={props.class} />
    </div>
  );
}

export default Header