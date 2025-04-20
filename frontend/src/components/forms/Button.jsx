import React from 'react'
import '../../styles/form/buttonStyle.css'

function Button(props) {
  return (
    <button
      className="button px-4 py2.5 w-full shadow-md h-9 rounded-md border-solid text-white text-xs "
      type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button