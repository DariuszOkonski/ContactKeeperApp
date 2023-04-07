const User = require('../../models/user.model');
const Contact = require('../../models/contact.model');
const { check, validationResult } = require('express-validator');
const { configText } = require('../../utils/configText');
const { name, email, phone, type } = require('../../config/const');

checkAddContact = [
  check(name, configText.validation.nameRequired).not().isEmpty(),
  check(email, configText.validation.emailRequired).not().isEmpty(),
  check(phone, configText.validation.phoneRequired).not().isEmpty(),
  check(type, configText.validation.typeRequired).not().isEmpty(),
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

async function updateContact(req, res) {
  const { name, email, phone, type } = req.body;

  const contactFields = {};

  if (name) contactFields.name = name;

  if (email) contactFields.email = email;

  if (phone) contactFields.phone = phone;

  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      const errors = {
        errors: [{ msg: configText.errors.contactNotFound }],
      };
      return res.status(404).json(errors);
    }

    if (contact.user.toString() !== req.user.id) {
      const errors = {
        errors: [{ msg: configText.errors.notAuthorized }],
      };
      return res.status(401).json(errors);
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    return res.status(200).json({ contact });
  } catch (error) {
    const errors = {
      errors: [{ msg: configText.errors.serverError }],
    };
    return res.status(500).json(errors);
  }
}

async function deleteContact(req, res) {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      const errors = {
        errors: [{ msg: configText.errors.contactNotFound }],
      };
      return res.status(404).json(errors);
    }

    if (contact.user.toString() !== req.user.id) {
      const errors = {
        errors: [{ msg: configText.errors.notAuthorized }],
      };
      return res.status(401).json(errors);
    }

    await Contact.findByIdAndRemove(req.params.id);

    return res.status(200).json({ msg: configText.messages.contactRemoved });
  } catch (error) {
    const errors = {
      errors: [{ msg: configText.errors.serverError }],
    };
    return res.status(500).json(errors);
  }
}

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
  checkAddContact,
};
