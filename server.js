'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./src/error-handlers/500.js');
const notFound = require('./src/error-handlers/404.js');
// const authRoutes = require('./src/auth/routes.js');
// const notFoundHandler = require('./src/error-handlers/404.js');
const logger = require('./src/middleware/logger.js');
const v1Routes = require('./src/routes/v1.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use(authRoutes);

// Catchalls

app.use(logger);
app.use('/api/v1', v1Routes);
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
