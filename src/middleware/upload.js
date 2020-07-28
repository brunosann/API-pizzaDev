const multer = require("multer");

const multerOptions = {
  storage: multer.diskStorage({
    destination: (req, file, next) => {
      next(null, "uploads");
    },
    filename: (req, file, next) => {
      const name = file.originalname;
      next(null, `${Date.now()}${name}`);
    },
  }),
  fileFilter: (req, file, next) => {
    const allowed = ["image/jpeg", "image/png", "image/jpg"];
    if (allowed.includes(file.mimetype)) {
      next(null, true);
    }
    next(null, false);
  },
};

exports.upload = multer(multerOptions).single("image");
