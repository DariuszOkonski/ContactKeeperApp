const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user.model');
const { configText } = require('../../utils/configText');
const { EXPIRES_IN } = require('../../utils/constants');

const checkLogInUserData = [
  check('email', configText.validation.email).isEmail(),
  check('password', configText.validation.passwordRequired).exists(),
];

/**
 * @route   GET api/auth
 * @desc    get Logged In User
 * @access  Private
 */
function getLoggedInUser(req, res) {
  return res.status(200).json({ message: 'Get Logged In User' });
}

/**
 * @route   POST api/auth
 * @desc    auth user & get token
 * @access  Public
 */
async function logInUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      const errors = {
        errors: [{ msg: configText.errors.invalidCredentials }],
      };
      return res.status(400).json(errors);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      const errors = {
        errors: [{ msg: configText.errors.invalidCredentials }],
      };
      return res.status(400).json(errors);
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const secret = config.get('jesonWebTokenSecret');
    jwt.sign(
      payload,
      secret,
      {
        expiresIn: EXPIRES_IN,
      },
      (err, token) => {
        if (err) throw err;

        return res.status(200).json({ token });
      }
    );
  } catch (err) {
    const errors = {
      errors: [{ msg: configText.errors.serverError }],
    };
    return res.status(500).json(errors);
  }
}
module.exports = {
  getLoggedInUser,
  logInUser,
  checkLogInUserData,
};
