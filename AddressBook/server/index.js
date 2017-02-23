var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var routesContact = require('./routes/contact');

// Connexion à MongoDB (base addressbook)
mongoose.connect('mongodb://localhost/addressbook');

var app = express();

app.use(morgan('dev'));

// Enregistre les routes de routes/contact.js
app.use(routesContact);

app.use('/api', function(req, res, next) {
  res.statusCode = 404;
  res.json({
    msg: 'Not found'
  });
});

app.listen(8080, function() {
  console.log('Serveur démarré : http://localhost:8080');
});

