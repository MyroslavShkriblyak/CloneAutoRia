const router = require('express').Router();

const { authController } = require('../../controller');
const { userMiddleware, authMiddleware } = require('../../middleware');

router.post('/register', userMiddleware.newUserValid, userMiddleware.checkIsEmailUnique, authController.register)

router.post('/login', authMiddleware.bodyValidate, userMiddleware.getUserDynamically('email'), authController.login);

module.exports = router;
