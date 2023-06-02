const router = require('express').Router()

const { userMiddleware, authMiddleware } = require('../../../middleware')
const { advertisementController, userController } = require('../../../controller')


router.put(
  '/ban/:userId',
  userMiddleware.checkRole('manager'),
  authMiddleware.bodyValidate,
  userMiddleware.getUserDynamically('userId', 'params', '_id'),
  userController.BanUser
);

router.delete('/invalid', userMiddleware.checkRole('manager'), advertisementController.deleteAdvertMany);

router.put('/suspicious-advert',)

module.exports = router
