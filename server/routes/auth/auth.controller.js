function getAuth(req, res) {
  return res.status(200).json({ message: 'Auth' });
}

module.exports = {
  getAuth,
};
