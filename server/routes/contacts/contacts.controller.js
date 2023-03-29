function getContacts(req, res) {
  return res.status(200).json({ message: 'Contact' });
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
