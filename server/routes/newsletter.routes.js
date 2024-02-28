const express = require('express');
const Newsletter = require('../models/NewsletterEmail.js');
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
router.post('/', async (req, res) => {
  const {email} = req.body;
  try {
    const existingEmail = await Newsletter.findOne({email});
    if (existingEmail) {
      return res.status(400).json({
        response: {
          code: 400,
          message: 'NEWSLETTER_EMAIL_EXIST',
        },
      });
    }
    await Newsletter.create({email});
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
});
module.exports = router;
