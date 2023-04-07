export const endpoints = {
  error: '*',
  notFound: '/404',
  home: '/',
  contacts: '/contacts',
  about: '/about',
  register: '/register',
  login: '/login',
  logout: '/logout',
};

const baseApi = 'http://localhost:5000';
const baseContacts = '/api/contacts';
const baseAuth = '/api/auth';
const baseUsers = '/api/users';

export const endpointsExpress = {
  localhost: baseApi,
  auth: `${baseApi}${baseAuth}`,
  contacts: `${baseApi}${baseContacts}`,
  updateContacts: (_id) => `${baseApi}${baseContacts}/${_id}`,
  deleteContact: (_id) => `${baseApi}${baseContacts}/${_id}`,
  users: `${baseApi}${baseUsers}`,
};
