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
export const endpointsExpress = {
  localhost: baseApi,
  auth: `${baseApi}/api/auth`,
  contacts: `${baseApi}/api/contacts`,
  users: `${baseApi}/api/users`,
};
