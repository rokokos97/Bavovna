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
        console.log('isPasswordEqual', isPasswordEqual);
        if (!isPasswordEqual) {
          return res.status(400).json({
            error: {
              message: 'INVALID_PASSWORD',
              code: 400,
            },
          });
        }
        const updatedUser = await User.findByIdAndUpdate(_id, req.body, {new: true});
        res.send(updatedUser);
      } catch (e) {
        res.status(500).json({
          message: 'Server error. Please try later...',
        });
      }
    });
router.get('/:userId', auth, async (req, res) => {
  try {
    const {userId} = req.params;
    const user = await User.findById(userId);
    res.send(user);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try later...',
    });
  }
});
module.exports = router;
