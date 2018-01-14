const express = require('express');
const app = express();

const times = require('./times');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Add date to the URL');
})

app.get('/:query', (req, res) => {
  const query = req.params.query;
  res.json(times(query));
});

app.listen(3000);