const User = require('../../models/user.model');
const Contact = require('../../models/contact.model');

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

function addContact(req, res) {
  return res.status(200).json({ message: 'Add new contact' });
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
};
