const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listten(app.get('port'), ()=>{
  console.log('app is runing');
});