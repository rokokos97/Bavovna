const express = require('express');
// const auth = require('../middleware/auth.middleware');
const Order = require('../models/Order');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

router.post('/',
    async (req, res)=> {
      console.log(req.body);
      const newOrder = await Order.create({
        ...req.body,
      });
      await newOrder.save();
      res.status(201).send({
      });
    });

module.exports = router;
