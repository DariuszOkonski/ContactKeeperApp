const User = require('../../models/user.model');
const { check, validationResult } = require('express-validator');
const { configText } = require('../../utils/configText');

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

function userRegistration(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log('--- checking here ---');
  console.log(req.body);

  return res.status(200).json(req.body);
}

module.exports = {
  getUsers,
  userRegistration,
  checkUserRegistrationData,
};
