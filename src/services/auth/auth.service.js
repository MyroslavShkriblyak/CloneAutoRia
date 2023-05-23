const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ApiError = require('../../error/ApiError');
const { tokenTypeEnum } = require('../../enum');
const { ACCESS_SECRET, REFRESH_SECRET } = require('../../config/config');

module.exports = {
  hashPassword: (password) => bcrypt.hash(password, 10),
  comparePassword: async (hashPassword, password) => {
    const isPasswordsSame = await bcrypt.compare(password, hashPassword);

    if (!isPasswordsSame) {
      throw new ApiError('Wrong email or password', 400);
    }
  },
  generateAccessToken: (dataToSing = {}) => {
    const accessToken = jwt.sign(dataToSing, ACCESS_SECRET, { expiresIn: '1d' });
    const refreshToken = jwt.sign(dataToSing, REFRESH_SECRET, { expiresIn: '10d' });

    return {
      accessToken,
      refreshToken
    };
  },
  checkToken: (token, tokenType = tokenTypeEnum.accessToken) => {
    try {
      let secret = '';

      if (tokenType === tokenTypeEnum.accessToken) secret = ACCESS_SECRET;
      else if (tokenType === tokenTypeEnum.refreshToken) secret = REFRESH_SECRET;

      return jwt.verify(token, secret);
    } catch (e) {
      throw new ApiError('Token not valid', 401);
    }
  }
}
