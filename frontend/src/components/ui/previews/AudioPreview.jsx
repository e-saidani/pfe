/** @format */

import React from "react";

function AudioPreview(props) {
  return (
    <div className="w-full my-2">
      <audio
        controls
        key={props.src}
        className="focus:outline-none">
        <source src={props.src} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPreview;
