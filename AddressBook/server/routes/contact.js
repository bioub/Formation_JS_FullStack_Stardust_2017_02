var Router = require('express').Router;
var bodyParser = require('body-parser');
var Contact = require('../models/contact');

var routes = new Router();

// GET /api/contacts -> liste
routes.get('/api/contacts', function(req, res, next) {
  Contact.find(function(err, contacts) {
    res.json(contacts);
  });
});

// POST /api/contacts -> ajoute
routes.post('/api/contacts', bodyParser.json());
routes.post('/api/contacts', function(req, res, next) {
  var ctc = new Contact(req.body);
  ctc.save(function(err, contact) {
    res.statusCode = 201;
    res.json(contact);
  });
});

// GET /api/contacts/123 -> affiche
routes.get('/api/contacts/:id', function(req, res, next) {
  var id = req.params.id;

  Contact.findById(id, function(err, contact) {
    res.json(contact);
  });
});

// DELETE /api/contacts/:id -> supprime
routes.delete('/api/contacts/:id', function(req, res, next) {
  var id = req.params.id;

  Contact.findByIdAndRemove(id, function(err, contact) {
    res.json(contact);
  });
});

module.exports = routes;