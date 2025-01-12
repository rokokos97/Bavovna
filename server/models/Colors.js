const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Colors', schema);
