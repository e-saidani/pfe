/** @format */

import React from "react";

function TextArea(props) {
  return (
    <div className="bg-white">
      <label className="text-xs text-gray-700 mb-1.5" htmlFor={props.name}>
        {props.name} <span className="text-red-600">*</span>
      </label>
      <textarea
        required
        rows={6}
        className="text-gray-900 text-xs px-4 py-2.5 w-full  focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-600 shadow-sm rounded-lg border placeholder:text-gray-400 font-mono"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        style={{ height: " 157px;" }}></textarea>
    </div>
  );
}

export default TextArea;
