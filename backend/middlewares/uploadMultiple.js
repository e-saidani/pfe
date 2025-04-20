/** @format */

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, "./uploads/images/users");
    } else if (file.fieldname === "logo") {
      cb(null, "./uploads/logos/societyLogos");
    }
  },
  filename: (req, file, cb) => {
    const name =
      file.fieldname === "image"
        ? `${new Date().toDateString()}_${req.body.fullName}.jpg`
        : `${new Date().toDateString()}_${req.body.logo}.jpg`;
    cb(null, name);
  },
});

const upload = multer({ storage }).fields([
  { name: "image", maxCount: 1 },
  { name: "logo", maxCount: 1 },
]);

export { upload };
