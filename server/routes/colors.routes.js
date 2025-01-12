const express = require('express');
const Colors = require('../models/Colors');
// eslint-disable-next-line new-cap
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const list = await Colors.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try later...',
    });
  }
});

module.exports = router;
