var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var TodoItem = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
	collection: 'items'
});

module.exports = mongoose.model('Item', Item);
