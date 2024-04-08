const express = require('express');
const nodemailer = require('nodemailer');
const config = require('../config/default.json');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const tokenService = require('../services/token.service');
const User = require('../models/User');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
function isTokenInvalid(data, dbToken) {
  return !data||!dbToken||data._id !== dbToken?.user?.toString();
}
const transporter = nodemailer.createTransport({
  host: config.bavovnaSpace.HOST,
  port: config.bavovnaSpace.PORT,
  auth: {
    user: config.bavovnaSpace.login,
    pass: config.bavovnaSpace.password,
  },
});
router.post('/signUp', [
  check('email', 'email is not correct')
      .isEmail(),
  async (req, res) => {
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
      const {email, password} = req.body;
      const existingUser = await User.findOne({email});
      if (existingUser) {
        return res.status(400).json({
          response: {
            code: 400,
            message: 'EMAIL_EXIST',
          },
        });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });
      const emailVerificationToken = tokenService.generateVerify({_id: newUser._id});
      const tokens = tokenService.generate({_id: newUser._id});
      await tokenService.save(newUser._id, tokens.refreshToken);
      newUser.emailVerificationToken = emailVerificationToken;
      await newUser.save();
      const encodedEmail = encodeURIComponent(email);
      const encodedToken = encodeURIComponent(emailVerificationToken);
      const verifyEmailURL = `https://anvovab.space/user/${newUser._id}?token=${encodedToken}&email=${encodedEmail}`;
      const mailOptions = {
        from: 'no-repaly@bavovna.space',
        to: email,
        subject: 'Confirm Your Registration at BAVOVNA',
        text: `Greetings! Thank you for signing up with BAVOVNA. To complete your registration process and activate your account, please click on the link below: `,
        html: `<p>Greetings!</p>
               <p>Thank you for signing up with BAVOVNA. To complete your registration process and activate your account, please click on the link below:</p>
               <a href="${verifyEmailURL}">To confirm registration click here... </a>
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
                message: 'VERIFY_EMAIL_SENT',
              },
            });
          }
        }
      });
      res.status(201).send({
        response: {
          message: 'USER_CREATED',
          code: 201,
        },
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
router.post('/signUpWithGoogle', [
  check('email', 'email is not correct')
      .isEmail(),
  async (req, res) => {
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
      const existingUser = await User.findOne({email});
      if (existingUser) {
        return res.status(400).json({
          response: {
            code: 400,
            message: 'EMAIL_EXIST',
          },
        });
      }
      const newUser = await User.create({
        ...req.body,
      });
      const tokens = tokenService.generate({
        _id: newUser._id,
      });
      await tokenService.save(newUser._id, tokens.refreshToken);
      res.status(201).send({
        ...tokens,
        userId: newUser._id,
        user: newUser,
        response: {
          message: 'USER_CREATED',
          code: 201,
        },
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
router.post('/signInWithPassword', [
  check('email', 'email is not correct')
      .normalizeEmail()
      .isEmail(),
  async (req, res) => {
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
      const {email, password} = req.body;
      console.log('req.body', req.body);
      const existingUser = await User.findOne({email});
      if (!existingUser) {
        return res.status(400).json({
          response: {
            code: 400,
            message: 'EMAIL_NOT_FOUND_OR_INVALID_PASSWORD',
          },
        });
      }
      if (!existingUser.password) {
        return res.status(400).json({
          response: {
            code: 400,
            message: 'EMAIL_NOT_FOUND_OR_INVALID_PASSWORD',
          },
        });
      }
      if (!existingUser.isVerified) {
        return res.status(400).json({
          response: {
            code: 400,
            message: 'EMAIL_NOT_VERIFIER',
          },
        });
      }
      const isPasswordEqual = await bcrypt.compare(
          password, existingUser.password);
      if (!isPasswordEqual) {
        return res.status(400).json({
          response: {
            code: 400,
            message: 'EMAIL_NOT_FOUND_OR_INVALID_PASSWORD',
          },
        });
      }
      const tokens = tokenService.generate({_id: existingUser._id});
      await tokenService.save(existingUser._id, tokens.refreshToken);
      res.status(201).send({
        ...tokens,
        userId: existingUser._id,
        user: existingUser,
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
  },
]);
router.post('/signInWithGoogle', [
  check('email', 'email is not correct')
      .normalizeEmail()
      .isEmail(),
  async (req, res) => {
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
      const existingUser = await User.findOne({email});
      if (!existingUser) {
        return res.status(400).json({
          response: {
            code: 400,
            message: 'EMAIL_NOT_FOUND',
          },
        });
      }
      const tokens = tokenService.generate({_id: existingUser._id});
      await tokenService.save(existingUser._id, tokens.refreshToken);
      return res.status(201).send(
          {...tokens, userId: existingUser._id, user: existingUser});
    } catch (error) {
      return res.status(500).json({
        response: {
          errors: error,
          code: 500,
          message: 'SERVER_ERROR',
        },
      });
    }
  },
]);
router.post('/forgotPassword', [
  check('email', 'email is not correct')
      .isEmail(),
  async (req, res) => {
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
      const existingUser = await User.findOne({email});
      if (!existingUser) {
        return res.status(400).json({
          response: {
            code: 400,
            message: 'EMAIL_NOT_FOUND',
          },
        });
      }
      const emailVerificationToken= tokenService.generate({_id: existingUser._id});
      existingUser.emailVerificationToken = emailVerificationToken.accessToken;
      await existingUser.save();
      const encodedEmail = encodeURIComponent(email);
      const encodedToken = encodeURIComponent(emailVerificationToken.accessToken);
      const resetPasswordURL = `https://anvovab.space/signIn/resetPassword?token=${encodedToken}&email=${encodedEmail}`;
      const mailOptions = {
        from: 'no-repaly@bavovna.space',
        to: email,
        subject: 'Reset Your BAVOVNA Account Password',
        text: `Hello,

We received a request to reset the password for your BAVOVNA account. If you made this request, please click on the link below to set a new password:`,
        html: `<p>Greetings!</p>
               <p>We received a request to reset the password for your BAVOVNA account.</p>
               <p>If you made this request, please click on the link below to set a new password:</p>
               <a href="${resetPasswordURL}">To reset password click here... </a>\`
               <p>If you did not request a password reset, please ignore this email or contact support if you have any concerns.</p>
               <p>For your security, this password reset link will expire in 24 hours.</p>
               <p>Thank you for being a part of the BAVOVNA community!</p>
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
                message: 'RESET_EMAIL_SENT',
              },
            });
          }
        }
      });
    } catch (error) {
      return res.status(500).json({
        response: {
          errors: error,
          code: 500,
          message: 'SERVER_ERROR',
        },
      });
    }
  }]);
router.post('/resetPassword', async (req, res) => {
  try {
    const {token, email, password} = req.body;
    const currentUser = await User.findOne({email});
    console.log('currentUser', currentUser);
    const isValidToken = (token === currentUser.emailVerificationToken);
    if (isValidToken) {
      currentUser.password = await bcrypt.hash(password, 12);
      const newToken = tokenService.generate({_id: currentUser._id});
      await tokenService.save(currentUser._id, newToken.refreshToken);
      currentUser.emailVerificationToken = newToken.accessToken;
      await currentUser.save();
      return res.status(200).json({
        response: {
          code: 200,
          message: 'PASSWORD_CHANGED',
        },
      });
    } else {
      return res.status(400).json({
        response: {
          code: 400,
          message: 'INVALID_TOKEN',
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
router.post('/emailVerification', async (req, res) => {
  try {
    const {token, email} = req.body;
    const currentUser = await User.findOne({email});
    if (!currentUser) {
      return res.status(400).json({
        response: {
          code: 400,
          message: 'USER_NOT_FOUND',
        },
      });
    }
    const isValidToken = (token === currentUser.emailVerificationToken);
    if (isValidToken) {
      currentUser.isVerified = true;
      await currentUser.save();
      const tokens = tokenService.generate({_id: currentUser._id});
      res.status(201).send({
        ...tokens,
        userId: currentUser._id,
        user: currentUser,
        response: {
          code: 200,
          message: 'EMAIL_VERIFIED',
        },
      });
    } else {
      return res.status(400).json({
        response: {
          code: 400,
          message: 'INVALID_TOKEN',
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
router.post('/token', async (req, res) => {
  try {
    const {refresh_token: refreshToken} = req.body;
    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);
    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({
        response: {
          code: 401,
          message: 'UNAUTHORIZED',
        },
      });
    }
    const tokens = tokenService.generate({_id: data._id});
    await tokenService.save(data._id, tokens.refreshToken);
    res.status(201).send({...tokens, userId: data._id});
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
