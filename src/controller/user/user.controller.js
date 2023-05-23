const { userService, authService } = require('../../services');

const ApiError = require('../../error/ApiError');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const users = await userService.getAll();

      res.json(users);
    } catch (e) {
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const newUserInfo = req.body;
      const userId = req.params.userId;

      const user = await userService.update(userId, newUserInfo);

      if (!user) {
        throw new ApiError('User not found', 404);
      }

      user.isBanned = true;
      await user.save();
      res.json('ok');
    } catch (e) {
      next(e);
    }
  },
  create: async (req, res, next) => {
    try {
      const { password } = req.body;

      const hashPassword = await authService.hashPassword(password);

      const user = await userService.created({ ...req.body, password: hashPassword });

      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }
};
