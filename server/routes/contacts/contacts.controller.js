function getContacts(req, res) {
  return res.status(200).json({ message: 'Contact' });
}

module.exports = {
  getContacts,
};
