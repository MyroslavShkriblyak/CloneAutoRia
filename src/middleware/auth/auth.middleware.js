const { authValidator } = require('../../validator');
const { authService } = require('../../services');
const ApiError = require('../../error/ApiError');
const { Auth } = require('../../dataBase');

module.exports = {
  bodyValidate: async (req, res, next) => {
    try {
      const validate = await authValidator.loginValidator.validate(req.body);

      if (validate.error) {
        throw new ApiError(validate.error.message);
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  checkAccessToken: async (req, res, next) => {
    try {
      const accessToken = req.get('Authorization');

      if (!accessToken) {
        throw new ApiError('no token', 401);
      }

      authService.checkToken(accessToken);

      const tokenInfo = await Auth.findOne({ accessToken });

      if (!tokenInfo){
        throw new ApiError('token not valid', 401)
      }

      req.tokenInfo = tokenInfo;
      next();
    } catch (e) {
      next(e);
    }
  }
}
