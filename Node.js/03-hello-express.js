var express = require('express');

var server = express();

server.all('/', function(req, res) {
  res.send('<h2>Home</h2>');
});

server.all('/presentation', function(req, res) {
  res.send('<h2>Présentation</h2>');
});

server.get('/contact', function(req, res) {
  res.send('<h2>Form contact</h2>');
});

server.post('/contact', function(req, res) {
  res.send('<h2>Message envoyé</h2>');
});

server.listen(8080, function() {
  console.log('Serveur démarré : http://localhost:8080');
});

