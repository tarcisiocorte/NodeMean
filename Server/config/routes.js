module.exports = function(app) {

  require('../routes/courses')(app);
  require('../routes/users')(app);

  app.all('/api/*', function(req, res) {
    res.send(404);
  });
}

