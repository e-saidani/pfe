/** @format */

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads/audios");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${req.body.fullName}`);
  },
});

const upload = multer({ storage }).single("file");

export { upload };
