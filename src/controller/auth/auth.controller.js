const { authService } = require('../../service');
const { AuthModel } = require('../../dataBase');
const { userController } = require('../index')

module.exports = {
  register: async (req, res, next) => {
    try {
      const { password } = req.body;

      const hashPassword = await authService.hashPassword(password);

      const user = await userController.create({ ...req.body, password: hashPassword})

      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      const { user, body } = req;

      await authService.comparePassword(user.password, body.password);

      const tokenPair = authService.generateAccessToken({ id: user._id });

      await AuthModel.create({ ...tokenPair, _user_id: user._id });

      res.json({
        user,
        ...tokenPair
      })
    } catch (e) {
      next(e);
    }
  }
};

