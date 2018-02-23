
const express = require('express');
const app = express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/get-file-size", upload.single('file'), (req, res) => {
    const result = { size: req.file.size };
    res.json(result);
});


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
