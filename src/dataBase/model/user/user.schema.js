const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, rim: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    role: ['buyer', 'seller', 'manager', 'administrator'],
    default: 'buyer'
  },
  accountType: {
    type: String,
    account: ['basic', 'premium'],
    default: 'basic'
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('User', userSchema);
