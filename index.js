var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
var Datastore = require('nedb')
  , db = new Datastore();

db.loadDatabase();

var app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('build'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, POST, DELETE");
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build/', 'index.html'));
});

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

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});