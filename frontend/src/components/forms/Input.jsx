/** @format */

import React from "react";
import "../../styles/form/inputStyle.css";

function Input(props) {
  return (
    <div>
      <label className="text-xs text-gray-700 mb-1.5" htmlFor={props.name}>
        {props.name} <span className="text-red-600">*</span>
      </label>
      <input
        required
        className="input px-4 py2.5 w-full  focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-600  shadow-sm h-9 rounded-md border-solid text-slate-900 placeholder:text-gray-400 font-mono"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
