const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session"); // Thêm dòng này
const axios = require("axios");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "key", resave: true, saveUninitialized: true })); // Thêm dòng này
app.use(express.static(__dirname));

const dataFilePath = path.join(__dirname, "data", "data.json");
const viewsPath = path.join(__dirname, "views");

app.get("/", (req, res) => {
  res.sendFile(path.join(viewsPath, "index.html"));
});

app.post("/send-otp", (req, res) => {
  const phoneNumber = req.body.phone;

  if (
    !phoneNumber ||
    !phoneNumber.match(/^\d+$/) ||
    phoneNumber.length !== 10
  ) {
    return res.status(400).send("Invalid phone number");
  }

  req.session.phone = phoneNumber; // Lưu số điện thoại vào phiên làm việc

  res.redirect("/otp");
});

app.get("/otp", (req, res) => {
  res.sendFile(path.join(viewsPath, "otp.html"));
});

app.post("/verify", async (req, res) => {
  const enteredOTP = req.body.otp;

  if (!enteredOTP || !enteredOTP.match(/^\d+$/) || enteredOTP.length !== 4) {
    return res.status(400).send("Invalid OTP");
  }

  try {
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    const otpArray = JSON.parse(jsonData).otp;

    if (otpArray.includes(enteredOTP)) {
      return res.send(`Your phone: ${req.session.phone} is active!`);
    } else {
      return res.status(401).send("Invalid OTP");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
