var mysql = require('mysql');
var path = require('path');
var express = require('express');
var app = express();

var emp = require('./routers/emp');
var dept = require('./routers/dept')

app.use(express.static(path.resolve(__dirname, '../public')));
app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/emp', emp);
app.use('/dept', dept);

app.listen(3000, function () {
  console.log('server starting...');
  console.log(path.resolve(__dirname, '../public'));
});
