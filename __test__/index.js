var express = require('express');
var cache = require('service-cache-middleware');
var app = express.Router();

app.get('/', cache(10), (req, res) => {
  res.send(new Date().toJSON());
});

app.listen(3000);