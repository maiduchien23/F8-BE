const express = require("express");
const fileController = require("../controllers/FileController");
const verifyToken = require("../middlewares/verifyTokenMiddleware");
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/upload",
  verifyToken,
  upload.single("file"),
  fileController.uploadFile
);
router.get("/files", verifyToken, fileController.listFiles);

module.exports = router;
