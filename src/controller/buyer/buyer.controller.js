const { carService, emailService } = require('../../service');

const ApiError = require('../../error/ApiError');
const { DealershipModel } = require('../../dataBase')

module.exports = {
  AllCars: async (req, res, next) => {
    try {
      const cars = await carService.getAll();

      res.json(cars);
    } catch (e) {
      next(e);
    }
  },
  CarViewing: async (req, res, next) => {
    try {
      const car = await carService.findOneByParams();

      if (!car) {
        throw new ApiError('Car was not found', 404)
      }

      await emailService.sendEmail('muroslav260@gmail.com')

      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  },
  CarTestDrive: async (req, res, next) => {
    try {

      await carService.findOneByParams();

      await emailService.sendEmail('muroslav260@gmail.com')
      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  },
  CarSeller: async (req, res, next) => {
    try {
      await carService.findOneByParams();

      await emailService.sendEmail('muroslav260@gmail.com',)

      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  },
  CarDealership: async (req, res, next) => {
    try {
      const { userId } = req.body;
      const dealer = await DealershipModel.findById(userId);

      if (!dealer) {
        throw new ApiError('dealer not found', 404)
      }

      await emailService.sendEmail('muroslav260@gmail.com',)

      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  }
};
