require('dotenv').config()
var env = process.env.APP_ENV

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var webRouter = require('./routes/web');
var apiRouter = require('./routes/api');
var authRouter = require('./routes/auth');
var authentication = require("./middleware/auth_middle");

var app = express();

// use middlerware all route
// app.use(authentication);

app.use('/web', webRouter);
app.use('/auth', authRouter);
app.use('/api', authentication, apiRouter);

// All other GET requests not handled before will return our React app
app.use(express.static(__dirname));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/src', 'App.js'));
});


// On Production
// app.use(express.static(path.join(__dirname, 'client', 'build')));

// app.use('*', function (request, response) {
//   response.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = ( env === 'development' ? err : {} );
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const server = app.listen(process.env.PORT || 5000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`Backend app listening at http://${host}:${port}`)
})


module.exports = app;
