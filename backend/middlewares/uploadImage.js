/** @format */

import multer from "multer";

const logoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads/images/logos/productLogos");
  },
  filename: function (req, file, cb) {
    return cb(null, `${new Date().toDateString()}_${req.body.productName}.jpg`);
  },
});

const uploadLogo = multer({ storage: logoStorage }).single("file");

export { uploadLogo };
