const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//Handlebars
const hbs = require('express-handlebars');


//Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const projectRouter = require('./routes/project');

const app = express();
 
// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', '.hbs');
//Handle hbs

app.engine('.hbs', hbs({extname: '.hbs', defaultLayout: 'Layout'}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Use the app to access to the routes
app.use('/', projectRouter);
app.use('/', usersRouter);
app.use('/', indexRouter);



module.exports = app;
