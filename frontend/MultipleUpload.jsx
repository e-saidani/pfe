/** this file is meant to help me remmeber how to send multiple file inputs to backend */

import React, { useRef } from "react";
import UploadImage from "../../../components/forms/UploadImage";
import Button from "../../../components/forms/Button";
import axios from "axios";

function Signup() {
  const uploadRef1 = useRef();
  const uploadRef2 = useRef();

  function upload() {
    const file1 = uploadRef1.current.getImage();
    const file2 = uploadRef2.current.getImage();
    if (!file1 && !file2) {
      console.log("No files selected");
      return;
    }

    const formData = new FormData();
    if (file1) formData.append("image", file1);
    if (file2) formData.append("logo", file2);

    axios
      .post("http://localhost:3000/upload", formData)
      .then((res) => console.log("Uploaded successfully", res))
      .catch((err) => console.log("Upload error", err));
  }

  return (
    <>
      <UploadImage ref={uploadRef1} name="image" nom="photo de profil" />
      <UploadImage ref={uploadRef2} name="logo" nom="logo de societe" />
      <Button onClick={upload} text="Upload" type="button" />
    </>
  );
}

export default Signup;