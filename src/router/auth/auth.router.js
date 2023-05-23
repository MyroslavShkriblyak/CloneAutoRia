const router = require('express').Router();

const { authController } = require('../../controller');
const { userMiddleware, authMiddleware } = require('../../middleware');

router.post('/login', authMiddleware.bodyValidate, userMiddleware.getUserDynamically('email'), authController.login);

module.exports = router;
