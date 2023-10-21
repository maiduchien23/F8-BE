const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const Permission = model.Permission;

module.exports = async (req) => {
  if (!req.user) {
    return [];
  }

  const { id } = req.user;

  const user = await User.findOne({
    where: { id },
    include: [
      {
        model: Role,
        include: {
          model: Permission,
        },
      },
    ],
  });

  if (!user) {
    return [];
  }

  const permissions = new Set();

  user.Roles.forEach((role) => {
    role.Permissions.forEach((permission) => {
      permissions.add(permission.value);
    });
  });

  return Array.from(permissions);
};
