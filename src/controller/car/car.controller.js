const { carService } = require('../../services');

const ApiError = require('../../error/ApiError');

module.exports = {
  carById: async (req, res, next) => {
    try {
      const car = await carService.findOneByParams();

      if (!car) {
        throw new ApiError('car not', 404)
      }

      res.json(car);
    } catch (e) {
      next(e);
    }
  },
  updateCar: async (req, res, next) => {
    try {
      const newCarInfo = req.body;
      const carId = req.params.carsId;

      const car = await carService.updateCar(carId, newCarInfo);

      res.status(201).json(car);
    } catch (e) {
      next(e);
    }
  },
  createCar: async (req, res, next) => {
    try {
      const car = await carService.created(req.body);

      res.status(201).json(car);
    } catch (e) {
      next(e);
    }
  },
  deleteCar: async (req, res, next) => {
    try {
      await carService.deleteOne({ _id: req.params.carsId })
      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  }
}
