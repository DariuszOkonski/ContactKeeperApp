const User = require('../../models/user.model');
const { check, validationResult } = require('express-validator');
const { configText } = require('../../utils/configText');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { EXPIRES_IN } = require('../../utils/constants');

const checkUserRegistrationData = [
  check('name', configText.validation.name).not().isEmpty(),
  check('email', configText.validation.email).isEmail(),
  check('password', configText.validation.password).isLength({
    min: 6,
  }),
];

function getUsers(req, res) {
  return res.status(200).json({ message: 'Users' });
}

async function userRegistration(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      const errors = {
        errors: [{ msg: configText.errors.userAlreadyExists }],
      };
      return res.status(400).json(errors);
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

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
  getUsers,
  userRegistration,
  checkUserRegistrationData,
};
