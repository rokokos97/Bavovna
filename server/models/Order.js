const {Schema, model} = require('mongoose');

const schema = new Schema({
  items: [{
    type: String,
  }],
  userData: {type: Object},
  orderAmount: {type: Number},
  shippingPrice: {type: Number},
  deliveryOption: {type: String},
  deliveryMethod: {type: String},
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
