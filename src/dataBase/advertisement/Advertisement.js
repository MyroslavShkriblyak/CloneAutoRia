const { Schema, model } = require('mongoose')

const advertisementSchema = new Schema({
  _advert_id: { type: Schema.Types.ObjectId, ref: 'User' },
  brand: String,
  model: String,
  price: Number,
  currency: String,
  status: String,
  views: Number,
});

module.exports = model("Advertisement", advertisementSchema);
