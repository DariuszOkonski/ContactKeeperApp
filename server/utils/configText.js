const configText = {
  token: {
    name: 'x-auth-token',
  },
  mongoDB: {
    connected: 'MongoDB is Connected...',
    notConnected: 'MongoDB NOT Connected...',
  },
  validation: {
    name: 'Please add name',
    email: 'Please include a valid email',
    password: 'Please entar a password with 6 or more characters',
    passwordRequired: 'Password is required',
    nameRequired: 'Name is required',
  },
  errors: {
    serverError: 'Server Error',
    userAlreadyExists: 'User already exists',
    invalidCredentials: 'Invalid credentials',
    noTokenAuthDenied: 'No token, authorization denied',
    tokenNotValid: 'Token is not valid',
  },
};

module.exports = {
  configText,
};
