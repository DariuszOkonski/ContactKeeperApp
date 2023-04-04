const express = require('express');
const { endpoints } = require('../../utils/endpoints');
const isUserAuthorized = require('../../middleware/auth');

const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
  checkAddContact,
} = require('./contacts.controller');
const contactsRouter = express.Router();

/**
 * @route   GET api/contacts
 * @desc    Get all users contactes
 * @access  Private
 */
contactsRouter.get(endpoints.slash, isUserAuthorized, getContacts);

/**
 * @route   GET api/contacts
 * @desc    Add new contact
 * @access  Private
 */
contactsRouter.post(
  endpoints.slash,
  [isUserAuthorized, checkAddContact],
  addContact
);

/**
 * @route   PUT api/contacts/:id
 * @desc    update contact
 * @access  Private
 */
contactsRouter.put(`${endpoints.slash}:id`, isUserAuthorized, updateContact);

/**
 * @route   DELETE api/contacts/:id
 * @desc    delete contact
 * @access  Private
 */
contactsRouter.delete(`${endpoints.slash}:id`, isUserAuthorized, deleteContact);

module.exports = {
  contactsRouter,
};
