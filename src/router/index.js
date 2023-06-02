module.exports = {
  userRouter: require('./user/user.router'),
  authRouter: require('./auth/auth.router'),
  advertisementRouter: require('./advertisement/advertisement.router'),
  buyerRouter: require('./role/buyer/buyer.router'),
  managerRouter: require('./role/manager/manager.router'),
  sellerRouter: require('./role/seller/seller.router'),
  adminRouter: require('./role/admin/administrator.router')
};
