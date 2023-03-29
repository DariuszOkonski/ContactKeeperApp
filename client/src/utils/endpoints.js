export const endpoints = {
  error: '*',
  notFound: '/404',
  home: '/',
  contacts: '/contacts',
  about: '/about',
  register: '/register',
  login: '/login',
};

const baseApi = 'http://localhost:5000';
const baseContacts = '/api/contacts';
const baseAuth = '/api/auth';
const baseUsers = '/api/users';

export const endpointsExpress = {
  localhost: baseApi,
  auth: `${baseApi}${baseAuth}`,
  contacts: `${baseApi}${baseContacts}`,
  updateContacts: (id) => `${baseApi}${baseContacts}/:${id}`,
  deleteContact: (id) => `${baseApi}${baseContacts}/:${id}`,
  users: `${baseApi}${baseUsers}`,
};
