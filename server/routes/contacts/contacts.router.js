const express = require('express');
const { getContacts } = require('./contacts.controller');
const contactsRouter = express.Router();

contactsRouter.get('/', getContacts);

module.exports = {
  contactsRouter,
};
