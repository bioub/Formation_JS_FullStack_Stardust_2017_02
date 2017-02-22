var express = require('express');

var contacts = [{
  prenom: 'Steve',
  nom: 'Jobs',
  id: 123
}, {
  prenom: 'Bill',
  nom: 'Gates',
  id: 524
}];

var app = express();

// GET /api/contacts -> liste
app.get('/api/contacts', function(req, res) {
  res.json(contacts);
});
// GET /api/contacts/123 -> affiche
app.get('/api/contacts/123', function(req, res) {
  res.json(contacts[0]);
});

app.listen(8080, function() {
  console.log('Serveur démarré : http://localhost:8080');
});

