const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { PORT, MONGODB_URL } = require('./config/config');
const {
  userRouter,
  authRouter,
  buyerRouter,
  managerRouter,
  carRouter,
  advertisementRouter
}  = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/buyer', buyerRouter);
app.use('/manager', managerRouter);
app.use('/auth', authRouter);
app.use('/cars', carRouter);
app.use('/advertisements', advertisementRouter);

app.listen(PORT, async () => {
  await mongoose.connect(MONGODB_URL);
  console.log(`Server start ${PORT}`);
});
