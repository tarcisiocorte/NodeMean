const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({executed: true}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

var db
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://tarcisio:1234.abcd@ds019946.mlab.com:19946/tarcisio-mongodb-crud', function(err, database){
  if (err) return console.log(err)
  db = database
  console.log('connected...')
    app.listen(3000, function() {
      console.log('listening on 3000')
    })
})

app.post('/quotes',function(req, res){
  db.collection('quotes').save(req.body,function(err, result){
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/',function(req, res){
  var cursor = db.collection('quotes').find()
  .toArray(function(err, results){
    console.log(results)
  })
})
