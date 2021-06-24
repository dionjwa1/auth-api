'use strict';

require('dotenv').config();
const {start} = require('./server.js');
const { db } = require('./src/models');

db.sync().then(() => {
  start(process.env.PORT || 3001);
});
