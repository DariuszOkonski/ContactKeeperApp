const express = require('express');
const { getAuth } = require('./auth.controller');
const authRouter = express.Router();

authRouter.get('/', getAuth);

module.exports = {
  authRouter,
};
