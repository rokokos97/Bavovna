const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('NewsletterEmail', schema);
