const express = require('express');
const Order = require('../models/Order');
// eslint-disable-next-line new-cap
const router = express.Router({ mergeParams: true });
const transporter = require('../services/mailer');
const { getOrderMailOption } = require('../services/mail_options/order_mail');
router.post('/', async (req, res) => {
  const { userInfo, items, deliveryPrice, orderAmount, deliveryInfo, _id } = req.body;
  try {
    const newOrder = await Order.create({
      ...req.body,
    });
    const deliveryCost = deliveryPrice !== 0 ? `${deliveryPrice} ₴` : 'Free';
    const totalAmount = orderAmount + deliveryPrice;
    await transporter.sendMail(
      getOrderMailOption(
        userInfo,
        items,
        deliveryInfo,
        _id,
        orderAmount,
        deliveryCost,
        totalAmount
      ),
      function (error, info) {
        if (error) {
          return res.status(500).json({
            response: {
              code: 500,
              message: 'SERVER_ERROR_MAIL',
            },
          });
        } else {
          if (info.response) {
            return res.status(201).send(newOrder);
          }
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      response: {
        errors: error,
        code: 500,
        message: 'SERVER_ERROR',
      },
    });
  }
});

module.exports = router;
