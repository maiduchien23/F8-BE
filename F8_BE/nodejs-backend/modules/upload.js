const formidable = require("formidable");

const fs = require("fs");

const Base = require("../core/Base");
const { error } = require("console");

class Upload extends Base {
  showForm = (req, res) => {
    this.render(req, res, "upload");
  };
  handleLoad = async (req, res) => {
    const form = new formidable.IncomingForm();

    //chọn thư mục uploads
    //form.uploadDir = "./public/uploads";

    //Cho phép phần mở rộng
    form.keepExtensions = true;

    const [fields, files] = await form.parse(req);

    //Lấy tên file
    const fileName = files.image[0].originalFilename;

    //Đổi tên file
    const error = fs.renameSync(
      files.image[0].filepath,
      "./public/uploads/" + fileName
    );

    let msg,
      html = "";

    if (!error) {
      msg = "Upload thành công";
      const image = fs.readFileSync("./public/uploads/" + fileName);

      const buffer = new Buffer.from(image);

      const imageBase64 = buffer.toString("base64");

      html = `<img src="data:${files.image[0].mimetype}; base64, ${imageBase64} " />`;
    } else {
      msg = "Upload thất bại";
    }
    // console.log(status);
    //console.log(form);
    res.end(msg + html);
  };
}

module.exports = new Upload();
