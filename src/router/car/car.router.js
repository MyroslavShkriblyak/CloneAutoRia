const router = require('express').Router();

const { carController, buyerController } = require('../../controller');
const { authMiddleware, carMiddleware } = require('../../middleware');

router.get('/', buyerController.AllCars);
router.post('/', carMiddleware.isNewCarValidator, carController.createCar);

router.get(
  '/:carId',
  carMiddleware.isCarIdValidator,
  authMiddleware.checkAccessToken,
  carMiddleware.getCarDynamically('carsId', 'params', '_id'),
  carController.carById
);
router.put(
  '/:carsId',
  carMiddleware.isCarIdValidator,
  carMiddleware.isEditCarValidator,
  authMiddleware.checkAccessToken,
  carMiddleware.getCarDynamically('carsId', 'params', '_id'),
  carController.updateCar
);
router.delete(
  '/:carsId',
  carMiddleware.isCarIdValidator,
  authMiddleware.checkAccessToken,
  carController.deleteCar
);

module.exports = router;
