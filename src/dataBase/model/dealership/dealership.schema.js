const { Schema, model } = require('mongoose');


const dealershipSchema = new Schema({
  name: { type: String, required: true },
  managers: [{ type: Schema.Types.ObjectId, ref: 'User', }],
  admins: [{ type: Schema.Types.ObjectId, ref: 'User', }],
  salespeople: [{ type: Schema.Types.ObjectId, ref: 'User', }],
  mechanics: [{ type: Schema.Types.ObjectId, ref: 'User', }]
},{
  timestamps: true,
  versionKey: false
})

module.exports = model('dealershipSchema', dealershipSchema);
