var auth = require('./auth'),
  courses = require('../controllers/courses'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  userRoute = require('../routes/users');

module.exports = function(app) {

  require('../routes/courses')(app);
  require('../routes/users')(app);

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
  
}

