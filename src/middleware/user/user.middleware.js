const { userService } = require('../../service');
const { userValidator, carValidator, commonValidator } = require('../../validator');

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
  },
  isEditUserValidator: async (req, res, next) => {
    try {
      const validate = await carValidator.editCarValidator.validate(req.body);

      if (validate.error) {
        throw new ApiError(validate.error.message, 400);
      }

      req.body = validate.value;
      next();
    } catch (e) {
      next(e);
    }
  },
  isUserIdValidator: async (req, res, next) => {
    try {
      const { carsId } = req.params;

      const validate = await commonValidator.idValidator.validate(carsId)

      if (validate.error) {
        throw new ApiError(validate.error.message, 400)
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  checksAccountBasicType: async (req, res, next) => {
    try {
      const { user } = req;

      if (user.accountType === 'basic' && user.advertisements.length >= 1 || user.accountType === 'premium') {
        throw new ApiError('access is denied', 400)
      }

      res.json('ok');
    } catch (e) {
      next(e);
    }
  }
};
