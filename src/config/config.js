module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/auto',
  FRONTEND_URL: process.env.FRONTEND_URL,

  ACCESS_SECRET: process.env.ACCESS_SECRET || 'yjgukyhiojuhbkju',
  REFRESH_SECRET: process.env.ACCESS_SECRET || 'yjgukyhiojuhbkjusdfds',

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
  NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD
};
