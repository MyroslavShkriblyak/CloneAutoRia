const { userService, authService } = require('../../service');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const users = await userService.getAll();

      res.json(users);
    } catch (e) {
      next(e);
    }
  },
  userById: async (req, res, next) => {
    try {
      const user = await userService.findOneByParams();

      res.json(user);
    } catch (e) {
      next(e);
    }
  },
  BanUser: async (req, res, next) => {
    try {
      const newUserInfo = req.body;
      const userId = req.params.userId;

      const user = await userService.update(userId, newUserInfo);

      user.isBanned = true;
      await user.save();
      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const newUserInfo = req.body;
      const userId = req.params.userId;

      const user = await userService.update(userId, newUserInfo);

      res.status(201).json(user);
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
  },
  deleteUser: async (req, res, next) => {
    try {

      await userService.deleteOne(req.params.userId);

      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  }
};
