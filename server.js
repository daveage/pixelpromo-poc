const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  config = require('./config/DB'),
  mysql = require('mysql'),
  itemRoutes = require('./expressRoutes/itemRoutes');

var connection = mysql.createConnection({
  host     : 'localhost:3306',
  user     : 'pixelpromo',
  password : 'password',
  database : 'pixelpromo'
});

connection.connect()

// mongoose.connect(config.DB).then(
//   () => {
//     console.log('Database is connected')
//   },
//   err => {
//     console.log('Can not connect to the database' + err)
//   }
// );

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/items', itemRoutes);
const port = process.env.PORT || 4000;

const server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});

connection.end();
