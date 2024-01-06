const {Schema, model} = require('mongoose');

const schema = new Schema({
  items: [{
    type: String,
  }],
  userData: {type: Object},
  totalPrice: {type: String},
  _id: {type: String},
  date: {type: String},
  shippingStatus: {
    type: String,
  },
  paymentStatus: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = model('Order', schema);
