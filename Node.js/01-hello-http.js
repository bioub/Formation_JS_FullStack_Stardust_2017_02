var http = require('http');

var server = http.createServer(function(req, res) {
  res.setHeader('Content-type', 'text/html');
  res.write('<h2>Hello</h2>');
  var now = new Date();
  res.write('Il est : ' + now.getHours() + 'h' + now.getMinutes() + 'm' + now.getSeconds());
  res.end();
});

server.listen(8080, function() {
  console.log('Serveur démarré : http://localhost:8080');
});

