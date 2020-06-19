var express = require('express');
var app = express();
app.set('view engine', 'ejs');
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(process.env.PORT, ()=>{
    console.log('app is runing...');
});