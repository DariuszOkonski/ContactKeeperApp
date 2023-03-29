const express = require('express');
const cors = require('cors');
const { endpoints } = require('./utils/endpoints');
const { authRouter } = require('./routes/auth/auth.router');
const { contactsRouter } = require('./routes/contacts/contacts.router');
const { usersRouter } = require('./routes/users/users.router');
const app = express();

// middleware
app.use(cors());

// routes
app.use(endpoints.auth, authRouter);
app.use(endpoints.contacts, contactsRouter);
app.use(endpoints.users, usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// dazzdev
// 0of41iUHNbaPZDXb

// mongodb+srv://dazzdev:0of41iUHNbaPZDXb@contactkeeperapp.kfiws7w.mongodb.net/?retryWrites=true&w=majority
