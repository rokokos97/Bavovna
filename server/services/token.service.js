require('dotenv').config();
const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const accessSecret = process.env.ACCESS_SECRET;
const refreshSecret = process.env.REFRESH_SECRET;
const verifySecret = process.env.VERIFY_SECRET;
const rememberMeSecret = process.env.REMEMBER_ME_SECRET;
class TokenService {
  generateVerify(payload) {
    return jwt.sign(payload, verifySecret, {expiresIn: '1h'});
  }
  generate(payload) {
    const accessToken = jwt.sign(payload, accessSecret, {expiresIn: '1h',});
    const refreshToken = jwt.sign(payload, refreshSecret);
    const emailVerificationToken = jwt.sign(payload, verifySecret, {expiresIn: '1h'});
    const rememberMe = jwt.sign(payload, rememberMeSecret, {expiresIn: '28d'});
    return {
      accessToken, refreshToken, emailVerificationToken, rememberMe, expiresIn: 3600,
    };
  }
//  createVerify(payload) {
//    const verifyToken = jwt.sign(payload, verifySecret);
//    return {
//      verifyToken,
//    };
//  }
  async save(userId, refreshToken) {
    const data = await Token.findOne({userId});
    if (data) {
      data.refreshToken = refreshToken;
      return data.save();
    }
    return await Token.create({user: userId, refreshToken});
  }
  validateRefresh(refreshToken) {
    try {
      return jwt.verify(refreshToken, refreshSecret);
    } catch (e) {
      return null;
    }
  }

  validateAccess(accessToken) {
    try {
      return jwt.verify(accessToken, accessSecret);
    } catch (e) {
      return null;
    }
  }
  async findToken(refreshToken) {
    try {
      return await Token.findOne({refreshToken});
    } catch (e) {
      return null;
    }
  }
}
module.exports = new TokenService();
