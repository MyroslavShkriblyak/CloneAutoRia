const { carService } = require('../../services');

module.exports = {
  AllCars: async (req, res, next) => {
    try {
      const cars = await carService.getAll()

      res.json(cars);
    } catch (e) {
      next(e);
    }
  },
  CarViewing: async (req, res, next) => {
    try {
    const car = await carService.findOneByParams();

      res.json('ok');
    } catch (e) {
      next(e);
    }
  }
}
