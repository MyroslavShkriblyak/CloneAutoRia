const { Schema, model } = require('mongoose');

const authSchema = new Schema({
  _user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  accessToken: String,
  refreshToken: String
}, {
  timestamps: true
});

module.exports = model('Auth', authSchema);

