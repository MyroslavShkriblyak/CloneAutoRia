const { Schema, model } = require('mongoose')

const CarSchema = new Schema({
  _cars_id: { type: Schema.Types.ObjectId, ref: 'User' },
  brand: String,
  model: String,
  price: String,
},{
  timestamps: true,
  versionKey: false
});

module.exports = model('Car', CarSchema);
