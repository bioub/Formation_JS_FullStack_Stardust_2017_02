var http = require('http');

var server = http.createServer(function(req, res) {
  /*
   3 URL possibles :
   / -> Page d'accueil
   /presentation -> Page de présentation
   /contact -> Nous contacter
  */
  res.setHeader('Content-type', 'text/html');
  res.statusCode = 200;

  if (req.url === '/') {
    res.write('<h2>Home</h2>');
  }
  else if (req.url === '/presentation') {
    res.write('<h2>Présentation</h2>');
  }
  else if (req.url === '/contact' && req.method === 'GET') {
    res.write('<h2>Contacter-nous</h2>');
    res.write('<form method="post">');
    res.write('<textarea></textarea>');
    res.write('<button type="submit">Envoyer</button>');
    res.write('</form>');
  }
  else if (req.url === '/contact' && req.method === 'POST') {
    res.write('<h2>Message envoyé</h2>');
  }
  else {
    res.statusCode = 404;
    res.write('<h2>Cette page n\'existe pas</h2>');
  }

  res.end();
});

server.listen(8080, function() {
  console.log('Serveur démarré : http://localhost:8080');
});

