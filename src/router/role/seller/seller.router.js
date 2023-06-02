const router = require('express').Router();

const { advertisementController } = require('../../../controller');
const { userMiddleware } = require('../../../middleware')

router.get('/car/listing', advertisementController.getAll);
router.post(
  '/car/listing',
  userMiddleware.checksAccountBasicType,
  advertisementController.create
);

router.get('/car/listing/:carsId', advertisementController.findById);
router.put('/car/listing/:carsId', advertisementController.updatedAt);
router.delete('/car/listing/:carsId', advertisementController.deleteAdvertOne);

module.exports = router;
