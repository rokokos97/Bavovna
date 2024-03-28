const express = require('express');
const Order = require('../models/Order');
const nodemailer = require("nodemailer");
const config = require("../config/default.json");
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const transporter = nodemailer.createTransport({
  host: config.bavovnaSpace.HOST,
  port: config.bavovnaSpace.PORT,
  auth: {
    user: config.bavovnaSpace.login,
    pass: config.bavovnaSpace.password,
  },
});
router.post('/',
    async (req, res)=> {
      const {userInfo} = req.body;
      try {
        const newOrder = await Order.create({
          ...req.body,
        });
        const mailOptions = {
          from: 'no-repaly@bavovna.space',
          to: userInfo.email,
          subject: 'Confirm Order at BAVOVNA',
          text: `Greetings! Thank you for signing up with BAVOVNA newsletter. `,
          html: `<p>Greetings!</p>
                 <p>Thank you for shopping with BAVOVNA.</p>
                 <p>Your order #${req.body._id} is confirmed.</p>
                 <p>Thank you for shopping in our store!</p>
                 <p>You will receive an email notification when shipped status will be updated.</p>
                 <p></p>
                 <p>Best wishes,</p>
                 <p>The BAVOVNA Team</p>`,
        };
        
        await transporter.sendMail(mailOptions, function(error, info) {
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
        });
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
