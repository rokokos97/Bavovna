const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

router.use('/auth', require('./auth.routes'));
router.use('/category', require('./category.routes'));
router.use('/item', require('./item.routes'));
router.use('/user', require('./user.routes'));
router.use('/upload', require('./upload.routes'));
module.exports = router;
