const { authService } = require('../../services');
const Auth = require('../../dataBase/auth/Auth');

module.exports = {
  login: async (req, res, next) => {
    try {
      const { user, body } = req;

      await authService.comparePassword(user.password, body.password);

      const tokenPair = authService.generateAccessToken({ id: user._id });

      await Auth.create({ ...tokenPair, _user_id: user._id });

      res.json({
        user,
        ...tokenPair
      })
    } catch (e) {
      next(e);
    }
  }
};

