const router = require('express').Router();

const { userController } = require('../../controller');
const { userMiddleware, authMiddleware } = require('../../middleware');

router.post(
  '/user',
  userMiddleware.newUserValid,
  userMiddleware.checkIsEmailUnique,
  userController.create
)

router.get('/', userController.getAll);
router.post(
  '/',
  userMiddleware.checkRole(),
  userMiddleware.newUserValid,
  authMiddleware.checkAccessToken,
  userMiddleware.checkIsEmailUnique,
  userController.create,
);



// router.delete(
//   '/listings/:userId',
//   userMiddleware.checkRole,
//   userMiddleware.getUserDynamically('userId', 'params', '_id'),
//   userController.delete
// );

module.exports = router;
