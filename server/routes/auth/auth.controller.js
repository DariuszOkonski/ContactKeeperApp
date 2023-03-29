function getLoggedInUser(req, res) {
  return res.status(200).json({ message: 'Get Logged In User' });
}

function logInUser(req, res) {
  return res.status(200).json({ message: 'Auth User And Get Token' });
}
module.exports = {
  getLoggedInUser,
  logInUser,
};
