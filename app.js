var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var mongoose = require('mongoose')
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const passport = require('passport');
var session = require('express-session');
var configDB = require('./config/database');
var assert = require('assert');
var { User } = require('./models');


var app = express();
app.use(express.static(__dirname + '/public'));

//ket noi mongoose
//'mongodb+srv://thientin:12345679@cluster0-yf6sd.mongodb.net/test?retryWrites=true&w=majority' || 
//mongoose.Promise = global.Promise
/*mongoose.connect(configDB.url, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    /*const db = mongoose.connection.db("QuanLySanPham");
    var collection = db.collection('Products');
    collection.find({}).toArray(function(e, docs) {
        console.log(docs[0]);
    });*/

//});
// require('./config/passport')(passport); // pass passport for configuration
// APP


// /APP
/*
app.use(morgan('dev')); // log tất cả request ra console log
app.use(cookieParser()); // đọc cookie (cần cho xác thực)
app.use(bodyParser()); // lấy thông tin từ html forms
// các cài đặt cần thiết cho passport
app.use(session({secret: 'doancuoiky'})); // chuối bí mật đã mã hóa coookie
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
// routes ======================================================================
//require('./routes')(app, passport); // Load routes truyền vào app và passport đã config ở trên
*/

// perform actions on the collection object
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
var vegetablesRouter = require('./routes/vegetables');
var servicesRouter = require('./routes/services');
var userRouter = require('./routes/user');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//flash 
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));
app.use(flash())
app.use((req, res, next) => {
    res.locals.success_mesages = req.flash('success')
    res.locals.error_messages = req.flash('error')
    next()
})

//passport 
app.use(passport.initialize())
app.use(passport.session())

//Views
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
app.use('/services', servicesRouter);
app.use('/vegetables', vegetablesRouter);
app.use('/user', userRouter);

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