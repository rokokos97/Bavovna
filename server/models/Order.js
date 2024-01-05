const {Schema, model} = require('mongoose');

const schema = new Schema({
  items: [{
    type: String,
  }],
  shippingAddress: {
    type: Object,
  },
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
