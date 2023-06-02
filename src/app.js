const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { PORT, MONGODB_URL } = require('./config/config');
const {
  authRouter,
  buyerRouter,
  managerRouter,
  sellerRouter,
  adminRouter
} = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/buyer', buyerRouter);
app.use('/seller', sellerRouter);
app.use('/manager', managerRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.listen(PORT, async () => {
  await mongoose.connect(MONGODB_URL);
  console.log(`Server start ${PORT}`);
});
