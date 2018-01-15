var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/whoiam", function (request, response) {
  const ip = request.headers['x-forwarded-for'].split(',')[0];
  const language = request.headers["accept-language"].split(',')[0];
  const paranthese = /\(([^\(\)]+)\)/g;
  const platform = request.headers['user-agent'].split(paranthese)[1];
  const info = {ip, language, platform};
  response.send(info);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
