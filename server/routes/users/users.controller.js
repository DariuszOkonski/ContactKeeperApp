function getUsers(req, res) {
  return res.status(200).json({ message: 'Users' });
}

module.exports = {
  getUsers,
};
