const express = require('express');
const Order = require('../models/Order');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

router.post('/',
    async (req, res)=> {
      const newOrder = await Order.create({
        ...req.body,
      });
      res.status(201).send(newOrder);
    });

module.exports = router;
