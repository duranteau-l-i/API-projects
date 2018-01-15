var express = require('express');
var app = express();
 
const times = require('./times');

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/:query', (req, res) => {
  const query = req.params.query;
  res.json(times(query));
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
