const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const { configText } = require('../utils/configText');

const connectDB = () => {
  mongoose
    .connect(db)
    .then(() => console.log(configText.mongoDB.connected))
    .catch((err) => {
      console.log(configText.mongoDB.notConnected);
      process.exit(1);
    });
};

module.exports = {
  connectDB,
};
