/** @format */

import React from "react";
import "../../styles/form/dragareaStyle.css";

function ViewImage(props) {
  return (
    <div className="bg-white relative w-40 h-40">
      <img
        className="w-full h-full object-cover rounded"
        src={props.src}
        alt={props.alt}
      />
      <button onClick={props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="absolute top-0 right-0 size-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default ViewImage;
