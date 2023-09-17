module.exports = (req, res, next) => {
  const { userLogin } = req.session;
  if (userLogin) {
    res.redirect("/");
  }
  next();
};
