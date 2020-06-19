const express = require('express');
const app = express();

app.set('PORT', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.PORT, ()=>{
  console.log('app is runing');
});