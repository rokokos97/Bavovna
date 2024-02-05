const {Schema, model} = require('mongoose');

const schema = new Schema({
  deliveryInfo: {type: Object},
  paymentMethod: {type: String},
  promoCodeDiscount: {type: Number},
  items: [{
    type: String,
  }],
  userInfo: {type: Object},
  orderAmount: {type: Number},
  _id: {type: String},
  date: {type: String},
  paymentStatus: {type: String},
  shippingStatus: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = model('Order', schema);
