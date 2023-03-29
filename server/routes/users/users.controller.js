function getUsers(req, res) {
  return res.status(200).json({ message: 'Users' });
}

function userRegistration(req, res) {
  return res.status(200).json({ message: 'userRegistration' });
}

module.exports = {
  getUsers,
  userRegistration,
};
