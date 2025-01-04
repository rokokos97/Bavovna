const express = require('express');
const Newsletter = require('../models/NewsletterEmail.js');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const transporter = require("../services/mailer");
const {getPromoCodeEmailOption} = require("../services/mail_options/promocode_email");
const {getNewsletterEmailOption} = require("../services/mail_options/newsletter_email");
router.post('/', async (req, res) => {
  const {email} = req.body;
  const encodedEmail = encodeURIComponent(email);
  const unsubscribeUrl = `https://anvovab.space/unsubscribe?email=${encodedEmail}`
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
    await transporter.sendMail(getPromoCodeEmailOption(email, unsubscribeUrl), function(error, info) {
      if (error) {
        return res.status(500).json({
          response: {
            code: 500,
            message: 'SERVER_ERROR_MAIL',
          },
        });
      } else {
        if (info.response) {
          res.status(200).json({
            response: {
              code: 200,
              message: 'CONFIRM_NEWSLETTER_SENT',
            },
          });
        }
      }
    });
    setTimeout(async () => {
      try {
        const info = await transporter.sendMail(getNewsletterEmailOption(email, unsubscribeUrl));
        console.log('Newsletter email sent:', info.response);
      } catch (error) {
        console.error('Error sending newsletter email:', error);
      }
    }, 120000);
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
router.post('/unsubscribe/', async (req, res) => {
  try {
    const {email} = req.body;
    const emailExists = await Newsletter.findOne({email});
    if (emailExists) {
      await Newsletter.deleteOne({email});
      return res.status(200).json({
        response: {
          code: 200,
          message: 'CONFIRM_NEWSLETTER_DELETED',
        },
      });
    }
    if (!emailExists) {
      return res.status(400).json({
        response: {
          code: 400,
          message: 'NEWSLETTER_NOT_EXIST',
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: {
        errors: error,
        code: 500,
        message: 'SERVER_ERROR',
      },
    });
  }
});
module.exports = router;
