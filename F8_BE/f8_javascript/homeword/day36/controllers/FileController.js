const multer = require("multer");
const File = require("../models/file");

module.exports = {
  uploadFile: async (req, res) => {
    try {
      const userId = req.user.userId;
      const { filename } = req.file;

      const file = await File.create({ filename, userId });

      res.json({ status: "success", data: file });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: "Upload failed" });
    }
  },

  listFiles: async (req, res) => {
    try {
      const userId = req.user.userId;

      const userFiles = await File.findAll({
        where: { userId },
      });

      res.json({ status: "success", data: userFiles });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ status: "error", message: "Failed to fetch files" });
    }
  },
};
