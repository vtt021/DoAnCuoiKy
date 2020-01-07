var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var mongoose = require('mongoose')
const bodyParser = require('body-parser');
var assert = require('assert');
//var User = require('./models/user');
//var expressLayouts = require('express-ejs-layouts');

//Passport

//Passport config
const passport = require('passport');
require('./config/passport')(passport);

const flash = require('connect-flash');
const session = require('express-session');
const app = express();
//DB Config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));
//EJS
//app.use(expressLayouts);
//app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false }));

//Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true

}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//Connect flash
app.use(flash());
//Global Vars
app.use((req, res, next) => {
    res.locals.login = req.isAuthenticated();
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error_msg = req.flash('error');
    next();
});
//Routes
//app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
//const PORT = process.env.PORT || 5000;

//app.listen(PORT, console.log(`Server started on port ${PORT}`));


app.use(express.static(__dirname + '/public'));

// perform actions on the collection object
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var singleRouter = require('./routes/single');
var aboutRouter = require('./routes/about')
var profileRouter = require('./routes/profile')
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
var vegetablesRouter = require('./routes/vegetables');
var servicesRouter = require('./routes/services');
var userRouter = require('./routes/user');
var searchRouter = require('./routes/search');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//passport 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
}))
app.use(passport.initialize())
app.use(passport.session())
    //flash 
app.use(flash())
app.use((req, res, next) => {
        res.locals.success_mesages = req.flash('success')
        res.locals.error_messages = req.flash('error')
        next()
    })
    //require('./routes/login')(app, passport);
    //Views
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/products', productsRouter);
app.use('/single', singleRouter);
app.use('/about', aboutRouter);
app.use('/profile', profileRouter);
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
app.use('/services', servicesRouter);
app.use('/vegetables', vegetablesRouter);
app.use('/user', userRouter);
app.use('/search', searchRouter);
//app.use('/result', resultRouter);

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