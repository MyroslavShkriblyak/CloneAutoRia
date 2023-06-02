const { carService } = require('../../service');

module.exports = {
  CarOllListing: async (req, res, next) => {
    try {
      const car = await carService.getAll();

      res.json(car);
    } catch (e) {
      next(e);
    }
  },
  createCarListing: async (req, res, next) => {
    try {
      const car = await carService.created(req.body);

      res.status(201).json(car);
    } catch (e) {
      next(e);
    }
  },
  updateCarSellerListing: async (req, res, next) => {
    try {
      const newInfoCar = req.body;
      const carsId = res.params.carsId;

      const car = await carService.updateCar(carsId, newInfoCar)

      res.status(201).json(car);
    } catch (e) {
      next(e);
    }
  },
  deleteCarListing: async (req, res, next) => {
    try {
      const car = await carService.deleteOne(req.params.carsId);

      res.status(201).json(car);
    } catch (e) {
      next(e);
    }
  }
}
