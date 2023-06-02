const router = require('express').Router();

const { advertisementService } = require('../../../service');
const { buyerController } = require('../../../controller');
const { userMiddleware } = require('../../../middleware');

router.get('/cars', advertisementService.getAll);

router.post('/car-viewing', buyerController.CarViewing);

router.post('/test-drive', buyerController.CarTestDrive);

router.post('/contact-seller', userMiddleware.checkRole('seller'), buyerController.CarSeller);

router.post('/contact-dealership', buyerController.CarDealership);

module.exports = router;
