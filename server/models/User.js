const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    currentPassword: { type: String },
    newPassword: { type: String },
    phoneNumber: { type: String },
    deliveryAddress: [{ type: Object }],
    currentDeliveryAddress: { type: Object },
    favorite: [{ type: String }],
    orders: [{ type: Object }],
    isVerified: { type: Boolean },
    emailVerificationToken: { type: String },
    isAdmin: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', schema);
