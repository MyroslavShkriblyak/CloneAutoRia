const router = require('express').Router();

const { userController, advertisementController } = require('../../../controller');
const { userMiddleware, authMiddleware, carMiddleware } = require('../../../middleware');

router.get('/users', authMiddleware.checkAccessToken, userController.getAll)
router.post(
  '/users',
  userMiddleware.newUserValid,
  userMiddleware.checkIsEmailUnique,
  authMiddleware.checkAccessToken,
  userController.create
);

router.get('/users/:userId',
  userMiddleware.isUserIdValidator,
  authMiddleware.checkAccessToken,
  userMiddleware.getUserDynamically('userId', 'params', '_id'),
  userController.userById
);
router.put(
  '/users/:userId',
  userMiddleware.isUserIdValidator,
  userMiddleware.isEditUserValidator,
  authMiddleware.checkAccessToken,
  userMiddleware.getUserDynamically('userId', 'params', '_id'),
  userController.updateUser
);
router.delete(
  '/users/:userId',
  userMiddleware.isUserIdValidator,
  authMiddleware.checkAccessToken,
  userController.deleteUser
);

router.get('/car/listing',   authMiddleware.checkAccessToken, advertisementController.getAll);
router.post('/car/listing', authMiddleware.checkAccessToken, advertisementController.create);

router.get('/car/listing/:carsId', authMiddleware.checkAccessToken, advertisementController.findById);
router.put('/car/listing/:carsId', authMiddleware.checkAccessToken, advertisementController.updatedAt);
router.delete('/car/listing/:carsId', authMiddleware.checkAccessToken, advertisementController.deleteAdvertOne);


router.put(
  '/ban/:userId',
  authMiddleware.bodyValidate,
  authMiddleware.checkAccessToken,
  userMiddleware.getUserDynamically('userId', 'params', '_id'),
  userController.BanUser
);

router.delete(
  '/invalid/:advertId',
  userMiddleware.checkRole('administrator'),
  authMiddleware.checkAccessToken,
  advertisementController.deleteAdvertOne
);

module.exports = router;

