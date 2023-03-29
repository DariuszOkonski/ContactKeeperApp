const express = require('express');
const { endpoints } = require('../../utils/endpoints');
const { getLoggedInUser, logInUser } = require('./auth.controller');
const authRouter = express.Router();

/**
 * @route   GET api/auth
 * @desc    get Logged In User
 * @access  Private
 */
authRouter.get(endpoints.slash, getLoggedInUser);

/**
 * @route   POST api/auth
 * @desc    auth user & get token
 * @access  Public
 */
authRouter.post(endpoints.slash, logInUser);

module.exports = {
  authRouter,
};
