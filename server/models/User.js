const {Schema, model} = require('mongoose');

const schema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String},
  phoneNumber: {type: String},
  deliveryAddress: {type: Object},
  novaPoshtaAddress: {type: Object},
  favorite: [{type: String}],
  orders: [{type: String}],
  isVerified: {type: Boolean, default: false},
  emailVerificationToken: {type: String, default: null},
}, {
  timestamps: true,
});

module.exports = model('User', schema);
