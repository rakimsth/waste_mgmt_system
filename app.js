const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config({ path: `${__dirname}/env/${process.env.NODE_ENV}.env` });

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const routeManager = require('./routes');

const swaggerDoc = require('./documentation');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDoc, { explorer: true }));
app.use('/', routeManager);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      success: false,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

module.exports = app;
