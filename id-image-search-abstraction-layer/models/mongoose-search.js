const mongoose = require('mongoose');

const mongoUrl= process.env.MONGODB,
      dbName= process.env.DBNAME;
mongoose.connect(mongoUrl);

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;
const latest = new Schema({
    term      : String,
    when      : Date
});

const lastImage = mongoose.model('imagesearches', latest);

exports.createHistory = (term, date) => {
    lastImage.create({ term : term , when: date }, (err, data) => {
      if (err) throw err;
      console.log('create ' + data);
    });
};

exports.searchInHistory = (req, res) => {
    lastImage.find((err, docs) => {
      const result = [];
      if (err) throw err;
      docs.forEach((d) => {
        const term = d.term,
              when = d.when;
        result.push({"term": term, "when": when});
      });
      res.json(result);
    });
};

