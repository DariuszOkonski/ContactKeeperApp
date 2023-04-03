const User = require('../../models/user.model');
const Contact = require('../../models/contact.model');
const { check, validationResult } = require('express-validator');
const { configText } = require('../../utils/configText');

checkAddContact = [
  check('name', configText.validation.nameRequired).not().isEmpty(),
];

async function getContacts(req, res) {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    return res.status(200).json({ contacts });
  } catch (err) {
    const errors = {
      errors: [{ msg: configText.errors.serverError }],
    };
    return res.status(500).json(errors);
  }
}

async function addContact(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, name, phone, type } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id,
    });

    const contact = await newContact.save();

    return res.status(200).json({ contact });
  } catch (error) {
    const errors = {
      errors: [{ msg: configText.errors.serverError }],
    };
    return res.status(500).json(errors);
  }
}

function updateContact(req, res) {
  return res.status(200).json({ message: 'Update contact' });
}

function deleteContact(req, res) {
  return res.status(200).json({ message: 'Delete contact' });
}

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
  checkAddContact,
};
