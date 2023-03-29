const express = require('express');
const { endpoints } = require('../../utils/endpoints');
const { getUsers, userRegistration } = require('./users.controller');
const usersRouter = express.Router();

usersRouter.get(endpoints.slash, getUsers);

/**
 * @route   POST api/users
 * @desc    Register a user
 * @access  Public
 */
usersRouter.post(endpoints.slash, userRegistration);

module.exports = {
  usersRouter,
};
