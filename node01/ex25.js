var express = require('express');
var app = express();

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});

app.post('/add.html', function(req, res){
    console.log(req.body);
    res.setHeader('content-Type', 'text/html; charset=utf-8')
    res.end('<h1>새로운 페이지</h1>');
});

app.listen(7070, function(){
    console.log('service run...');
});