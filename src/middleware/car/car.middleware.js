const { carValidator, commonValidator } = require('../../validator');
const { carService } = require('../../services');

const ApiError = require('../../error/ApiError')

module.exports = {
  getCarDynamically: (fieldNane, from = 'body', dbField = fieldNane) =>
    async (req, res, next) => {
      try {
        const fieldToSearch = req[from][fieldNane];
        const car = await carService.findOneByParams({ [dbField]: fieldToSearch });

        if (!car) {
          throw new ApiError('Car not Found', 404);
        }

        req.car = car;
        next();
      } catch (e) {
        next(e);
      }
    },
  isNewCarValidator: async (req, res, next) => {
    try {
      const validate = await carValidator.newCarValidator.validate(req.body);

      if (validate.error) {
        throw new ApiError(validate.error.message)
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  isEditCarValidator: async (req, res, next) => {
    try {
      const validate = await carValidator.editCarValidator.validate(req.body);

      if (validate.error) {
        throw new ApiError(validate.error.message, 400);
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  isCarIdValidator: async (req, res, next) => {
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
  }
}
