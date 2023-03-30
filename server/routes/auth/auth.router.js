const express = require('express');
const isUserAuthorized = require('../../middleware/auth');
const { endpoints } = require('../../utils/endpoints');
const {
  getLoggedInUser,
  logInUser,
  checkLogInUserData,
} = require('./auth.controller');
const authRouter = express.Router();

/**
 * @route   GET api/auth
 * @desc    get Logged In User
 * @access  Private
 */
authRouter.get(endpoints.slash, isUserAuthorized, getLoggedInUser);

/**
 * @route   POST api/auth
 * @desc    auth user & get token
 * @access  Public
 */
authRouter.post(endpoints.slash, checkLogInUserData, logInUser);

module.exports = {
  authRouter,
};
