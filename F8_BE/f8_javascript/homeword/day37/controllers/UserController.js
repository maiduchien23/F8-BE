const SendMail = require("../jobs/SendMail");
const Event = require("../core/Event");
module.exports = {
  login: (req, res) => {
    res.render("users/login");
  },

  handleLogin: async (req, res) => {
    const { email, name } = req.body;
    //Dispatch queue
    const event = new Event();
    event.dispatch(
      new SendMail({
        name,
        email,
      })
    );

    res.send("Hello");
  },
};
