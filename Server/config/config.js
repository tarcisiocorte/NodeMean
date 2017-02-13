var connectionToProduction = '';
if(process.env.NODE_ENV == 'production'){
  console.log('production is running...');
  connectionToProduction = require('./prodCon')();
  console.log('This is the connection: ' + connectionToProduction);
}

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: connectionToProduction,
    port: process.env.PORT || 3030
  }
}