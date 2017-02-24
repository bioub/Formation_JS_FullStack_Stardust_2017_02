var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

var routesContact = require('./routes/contact');

// Connexion à MongoDB (base addressbook)
mongoose.connect('mongodb://localhost/addressbook');

var app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname + '/../client')));
app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));

// Enregistre les routes de routes/contact.js
app.use(routesContact);

app.use('/api', function(req, res, next) {
  res.statusCode = 404;
  res.json({
    msg: 'Not found'
  });
});

app.use('/api', function(err, req, res, next) {
  res.statusCode = 500;
  res.json(err);
});

app.listen(8080, function() {
  console.log('Serveur démarré : http://localhost:8080');
});

