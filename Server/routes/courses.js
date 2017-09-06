var auth = require('../config/auth'),
  courses = require('../controllers/courses'),
  mongoose = require('mongoose');

module.exports = function(app) {

  app.get('/api/courses', courses.getCourses);
  app.get('/api/courses/:id', courses.getCourseById);

  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });
  
}