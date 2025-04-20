import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import '../../../styles/form/dragareaStyle.css'
import ImagePreview from '../../ui/ImagePreview'


const DragImage = forwardRef((props, ref) => {
  const [image, setImage] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const imageInputRef = useRef(null);

  function selectImage() {
    imageInputRef.current.click();
  }

  function onImageSelect(event) {
    const img = event.target.files[0];
    if (!img) return;
    if (img.type.split("/")[0] === "image") {
      setImage({
        name: img.name,
        url: URL.createObjectURL(img),
        file: img,
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
    const img = event.dataTransfer.files[0];
    if (!img) return;
    if (img.type.split("/")[0] === "image") {
      setImage({
        name: img.name,
        url: URL.createObjectURL(img),
        file: img,
      });
    }
  }

  function deleteImage() {
    URL.revokeObjectURL(image.url);
    setImage({});
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  }

  useImperativeHandle(ref, () => ({
    getImage: () => image.file,
  }));

  return (
    <>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="drag-area rounded-xl border border-dashed border-gray-300 -inset bg-gray-50 hover:cursor-pointer py-4 flex items-center justify-center"
        onClick={selectImage}>
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
            <h4 className="text-gray-700 font-semibold">Déposez l'image ici</h4>
          ) : (
            <h4 className="text-gray-700 font-semibold">
              Glissez et déposez l'image ici
            </h4>
          )}
          <span className="text-xs text-gray-700">
            Faites glisser et déposez {props.nom} de format PNG, JPG, JPEG ici
            ou naviguez
          </span>
          <span className="url underline text-xs">Parcourir l'image</span>
        </div>
        <input
          type="file"
          name={props.name}
          className="file hidden"
          ref={imageInputRef}
          onChange={onImageSelect}
        />
      </div>
      <div>
        {image.url && <ImagePreview src={image.url} onClick={deleteImage} />}
      </div>
    </>
  );
});

export default DragImage;
