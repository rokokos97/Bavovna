const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');
const bcrypt = require('bcryptjs');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

router.patch('/:userId', auth,
    async (req, res) => {
      const {currentPassword} = req.body;
      const _id = req.params.userId;
      try {
        const existingUser = await User.findOne({_id});
        if (!existingUser) {
          return res.status(400).json({
            error: {
              message: 'USER_NOT_FOUND',
              code: 400,
            },
          });
        }
        if (!currentPassword) {
          const updatedUser = await User.findByIdAndUpdate(_id, req.body, {new: true});
          return res.send(updatedUser);
        }
        const isPasswordEqual = await bcrypt.compare(
            currentPassword, existingUser.password);
        if (!isPasswordEqual) {
          return res.status(400).json({
            response: {
              message: 'INVALID_CURRENT_PASSWORD',
              code: 400,
            },
          });
        }
        const updatedUser = await User.findByIdAndUpdate(_id, req.body, {new: true});
        return res.status(200).send({
          response: {
            message: 'USER_UPDATE',
            code: 200,
          },
          updatedUser,
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
    });
router.get('/:userId', auth, async (req, res) => {
  try {
    const {userId} = req.params;
    const user = await User.findById(userId);
    res.send(user);
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
