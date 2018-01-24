
const express = require('express');
const path = require('path');
const url = require('./url');

const app = express();


app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render('index');
});

app.get('/new/:query*', function (req, res) {
  const query = req.params.query;
  const part = req.params[0];
  const host = req.get('host');
  let result = url(query, part, host);
  
  res.json(result);
});

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
