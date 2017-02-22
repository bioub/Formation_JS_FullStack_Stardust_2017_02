var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var jouer = function() {

    rl.question('What do you think of Node.js? ', function answerCallback(answer) {
      // TODO: Log the answer in a database
      console.log(typeof answer);

      jouer();

      // rl.close();
    });

};

jouer();
