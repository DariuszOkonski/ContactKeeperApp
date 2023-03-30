const configText = {
  mongoDB: {
    connected: 'MongoDB is Connected...',
    notConnected: 'MongoDB NOT Connected...',
  },
  validation: {
    name: 'Please add name',
    email: 'Please include a valid email',
    password: 'Please entar a password with 6 or more characters',
  },
  errors: {
    serverError: 'Server Error',
    userAlreadyExists: 'User already exists',
  },
};

module.exports = {
  configText,
};
