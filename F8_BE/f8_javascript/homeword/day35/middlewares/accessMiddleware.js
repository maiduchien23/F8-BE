function checkAccess(req, res, next) {
  const { user } = req;
  if (!checkUserAccess(user.id)) {
    return res.sendStatus(403);
  }
  next();
}

function checkUserAccess(userId) {
  return true;
}

module.exports = {
  checkAccess,
};
