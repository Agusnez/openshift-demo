var express = require('express');
var bodyParser = require('body-parser');
var Datastore = require('nedb')
  , db = new Datastore({ filename: 'database.db', autoload: true });

var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, POST, DELETE");
  next();
});

var contacts = [
  {
    "id": 0,
    "name": "Carlos",
    "phone": "679237786"
  }
];

app.get('/contacts', function (req, res) {
  db.find({}).projection({_id: 0, name:1,phone:1}).exec( function (err, docs) {
    delete docs['_id'];
    res.send(docs);
  });
});

app.post('/contacts', function (req, res) {
  
  contact = {
    name: req.body.name,
    phone: req.body.phone
  }

  db.insert(contact, function (err, contact) {  
    res.sendStatus(200);
  });

});

app.delete('/contact/:phone', function (req, res) {
  db.remove({ phone: req.params.phone }, { multi: true }, function (err, numRemoved) {
    if (numRemoved == 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});