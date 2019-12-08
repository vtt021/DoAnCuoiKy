var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var singleRouter = require('./routes/single');
var aboutRouter = require('./routes/about')
var codeRouter = require('./routes/code')
var loginRouter = require('./routes/login')
var petRouter = require('./routes/pet')
var breadRouter = require('./routes/bread')
var drinkRouter = require('./routes/drinks')
var checkoutRouter = require('./routes/checkout')
var eventsRouter = require('./routes/events')
var faqsRouter = require('./routes/faqs')
var frozenRouter = require('./routes/frozen')
var householdRouter = require('./routes/household')
var kitchenRouter = require('./routes/kitchen')
var mailRouter = require('./routes/mail')
var paymentRouter = require('./routes/payment')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/single', singleRouter);
app.use('/about', aboutRouter);
app.use('/code', codeRouter);
app.use('/login', loginRouter);
app.use('/pet', petRouter);


app.use('/bread', breadRouter);
app.use('/drinks', drinkRouter);
app.use('/checkout', checkoutRouter);
app.use('/events', eventsRouter);
app.use('/faqs', faqsRouter);
app.use('/frozen', frozenRouter);
app.use('/household', householdRouter);
app.use('/kitchen', kitchenRouter);
app.use('/mail', mailRouter);
app.use('/payment', paymentRouter);
// Connect MongoDB



// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

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
