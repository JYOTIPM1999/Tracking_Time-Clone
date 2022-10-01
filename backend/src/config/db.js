const mongoose = require("mongoose");

require('dotenv').config()
const url = process.env.mongo_url;
const connect = () => {
  return mongoose.connect(url);
};

module.exports = connect;
