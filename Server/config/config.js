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
    db: 'mongodb://xxxxxxxx:multivision@xxxxxxx.mongolab.com:xxxxx/multivision',
    port: process.env.PORT || 80
  }
}