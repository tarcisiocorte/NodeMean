const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes',function(req, res){
  console.log('The POST has been executed.')
})

app.listen(3000, function() {
  console.log('listening on 3000')
})
