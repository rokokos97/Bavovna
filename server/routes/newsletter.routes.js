const express = require('express');
const Newsletter = require('../models/NewsletterEmail.js');
const {check, validationResult} = require("express-validator");
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
router.post('/', [
  check('email', 'email is not correct')
    .isEmail,async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        response: {
          errors: errors.array(),
          code: 400,
          message: 'INVALID_DATA',
        },
      });
    }
    const {email} = req.body;
    const existingEmail = await Newsletter.findOne({email});
    if (existingEmail) {
      return res.status(400).json({
        response: {
          code: 400,
          message: 'EMAIL_EXIST',
        },
      });
    }
    const mailOptions = {
      from: 'no-repaly@bavovna.space',
      to: email,
      subject: 'Confirm Newsletter at BAVOVNA',
      text: `Greetings! Thank you for signing up with BAVOVNA newsletter. `,
      html: `<p>Greetings!</p>
               <p>Thank you for signing up with BAVOVNA newsletter.</p>
               <p>If you did not sign up on our site, please disregard this email.</p>
               <p>Welcome to the BAVOVNA community!</p>
               <p>Best wishes,</p>
               <p>The BAVOVNA Team</p>`,
    };
    await transporter.sendMail(mailOptions, function(error, info) {
      console.log('error', error);
      if (error) {
        return res.status(500).json({
          response: {
            code: 500,
            message: 'SERVER_ERROR_MAIL',
          },
        });
      } else {
        if (info.response) {
          return res.status(200).json({
            response: {
              code: 200,
              message: 'CONFIRM_NEWSLETTER_SENT',
            },
          });
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
}]);

module.exports = router;
