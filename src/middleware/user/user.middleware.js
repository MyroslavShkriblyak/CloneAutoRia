const { userService } = require('../../services');
const { userValidator } = require('../../validator');

const ApiError = require('../../error/ApiError');

module.exports = {
  getUserDynamically: (fieldNane, from = 'body', dbField = fieldNane) =>
    async (req, res, next) => {
      try {
        const fieldToSearch = req[from][fieldNane];
        const user = await userService.findOneByParams({ [dbField]: fieldToSearch });

        if (!user) {
          throw new ApiError('User not Found', 404);
        }

        req.user = user;
        next();
      } catch (e) {
        next(e);
      }
    },

  checkIsEmailUnique: async (req, res, next) => {
    try {
      const { email } = req.body;

      if (!email) {
        throw new ApiError('Email not present', 400);
      }

      const user = await userService.findOneByParams({ email });

      if (user) {
        throw new ApiError('User with this email already exists', 409);
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  newUserValid: async (req, res, next) => {
    try {
      const validate = await userValidator.newUserValidator.validate(req.body);

      if (validate.error) {
        throw new ApiError(validate.error.message);
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  checkRole: (Roles) => (req, res, next) => {
    try {
      const { user } = req;

      if (user && user.role === Roles) {
        throw new ApiError('role not valid', 403)
      }

      next();
    } catch (e) {
      next(e)
    }
  }
};
