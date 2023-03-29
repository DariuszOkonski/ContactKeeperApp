const express = require('express');
const cors = require('cors');
const { endpoints } = require('./utils/endpoints');
const { authRouter } = require('./routes/auth/auth.router');
const { contactsRouter } = require('./routes/contacts/contacts.router');
const { usersRouter } = require('./routes/users/users.router');
const { connectDB } = require('./config/db');
const app = express();

// middleware
connectDB();
app.use(cors());
app.use(express.json());

// routes
app.use(endpoints.auth, authRouter);
app.use(endpoints.contacts, contactsRouter);
app.use(endpoints.users, usersRouter);

// listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
