/** @format */

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import AudioPreview from "../../ui/previews/AudioPreview";

const DragAudio = forwardRef((props, ref) => {
  const [audio, setAudio] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const audioInputRef = useRef(null);

  function selectAudio() {
    audioInputRef.current.click();
  }

  function onAudioSelect(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.type.split("/")[0] === "audio") {
      if (audio.url) {
        URL.revokeObjectURL(audio.url);
      }
      setAudio({
        name: file.name,
        url: URL.createObjectURL(file),
        file: file,
      });
    }
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (!file) return;
    if (file.type.split("/")[0] === "audio") {
      if (audio.url) {
        URL.revokeObjectURL(audio.url);
      }
      setAudio({
        name: file.name,
        url: URL.createObjectURL(file),
        file: file,
      });
    }
  }

  useImperativeHandle(ref, () => ({
    getAudio: () => audio.file,
  }));

  return (
    <>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="drag-area rounded-xl border border-dashed border-gray-300 -inset bg-gray-50 hover:cursor-pointer py-4 flex items-center justify-center"
        onClick={selectAudio}>
        <div className="flex flex-col items-center m-0 justify-center text-center p-4 gap-2 w-3/4">
          <div className="p-4 rounded-full bg-gray-200 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          {isDragging ? (
            <h4 className="text-gray-700 font-semibold">Déposez l'audio ici</h4>
          ) : (
            <h4 className="text-gray-700 font-semibold">
              Glissez et déposez l'audio ici
            </h4>
          )}
          <span className="text-xs text-gray-700">
            Faites glisser et déposez {props.nom} de format MP3, WAV, WMA ici ou
            naviguez
          </span>
          <span className="url underline text-xs">Parcourir l'audio</span>
        </div>
        <input
          type="file"
          name={props.name}
          className="file hidden"
          ref={audioInputRef}
          onChange={onAudioSelect}
          accept="audio/*"
        />
      </div>
      <div>{audio.url && <AudioPreview src={audio.url} />}</div>
    </>
  );
});

export default DragAudio;
