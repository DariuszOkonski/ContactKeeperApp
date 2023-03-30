const jwt = require('jsonwebtoken');
const config = require('config');
const { configText } = require('../utils/configText');

const isUserAuthorized = (req, res, next) => {
  // get token from header
  const token = req.header(configText.token.name);

  // check if not exists
  if (!token) {
    const errors = {
      errors: [{ msg: configText.errors.noTokenAuthDenied }],
    };
    return res.status(401).json(errors);
  }

  try {
    const secret = config.get('jesonWebTokenSecret');
    const decoded = jwt.verify(token, secret);

    req.user = decoded.user;
    next();
  } catch (err) {
    const errors = {
      errors: [{ msg: configText.errors.tokenNotValid }],
    };
    return res.status(401).json(errors);
  }
};

module.exports = isUserAuthorized;
