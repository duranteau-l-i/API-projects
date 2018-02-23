
const express = require('express');
const app = express();
const request = require('request');
const searchDb = require('./models/mongoose-search');

app.use(express.static('public'));

const url = "https://pixabay.com/api/?key=";
const apiKey = process.env.API_KEY;

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/imagesearch/:name", (req, res) => {
  const name = req.params.name.split(' ').join('+');
  const offset = req.query.offset;
  const search = url + apiKey + '&q=' + name + '&?page=' + offset;

  request(search, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send('<pre>' + body + '</pre>');
    } else {
      res.send('error: ' + '<pre>' + error + '</pre>');
    }
  });
  
  const term = req.params.name.split('&').join('');
  const date = Date.now();
  searchDb.createHistory(term , date);
  
});

app.get("/api/latest/imagesearch/", searchDb.searchInHistory);


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
