const { authService } = require('../../services');
const { AuthModel } = require('../../dataBase');

module.exports = {
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

