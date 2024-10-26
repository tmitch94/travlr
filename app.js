var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//Routers
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var roomRouter = require ('./app_server/routes/rooms');
var mealRouter = require ('./app_server/routes/meals');
var newsRouter = require ('./app_server/routes/meals');
var aboutRouter = require ('./app_server/routes/meals');
var contactRouter = require ('./app_server/routes/meals');
var apiRouter = require('./app_api/routes/index');

var handlebars = require('hbs');

//Database
require('./app_api/models/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server' ,'views'));

handlebars.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/travel', travelRouter)
app.use('/users', usersRouter);
app.use('/rooms', roomRouter);
app.use('/meals', mealRouter);
app.use('/news', newsRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/api',apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
