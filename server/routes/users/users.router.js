const express = require('express');
const { endpoints } = require('../../utils/endpoints');
const {
  getUsers,
  userRegistration,
  checkUserRegistrationData,
} = require('./users.controller');
const usersRouter = express.Router();

usersRouter.get(endpoints.slash, getUsers);

/**
 * @route   POST api/users
 * @desc    Register a user
 * @access  Public
 */
usersRouter.post(endpoints.slash, checkUserRegistrationData, userRegistration);

module.exports = {
  usersRouter,
};
