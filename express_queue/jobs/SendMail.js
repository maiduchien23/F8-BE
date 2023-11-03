const nodemailer = require("nodemailer");
class SendMail {
  constructor(data) {
    this.data = data;
  }

  handle = async () => {
    //Logic gửi email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mdhien2302@gmail.com",
        pass: "lacl xiiq nfhc cark",
      },
    });
    const info = await transporter.sendMail({
      from: `F8 <mdhien2302@gmail.com>`, // sender address
      to: this.data.email, // list of receivers
      subject: `Xin chào: ${this.data.name}`, // Subject line
      html: `Xin chào bạn ${this.data.name}, tôi đang test email`,
    });
    console.log(`Send mail success`);
  };
}

module.exports = SendMail;
