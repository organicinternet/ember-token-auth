var express = require('express');

module.exports = function(app) {
  var oauth2CallbackRouter = express.Router();
  oauth2CallbackRouter.get('/', function(req, res) {
    res.send('hello');
  });
  app.use('/api/oauth2/callback', oauth2CallbackRouter);
};
