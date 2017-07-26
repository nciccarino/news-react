// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  url: {
  	type: String
  },
  notes: {
  	type: String
  }, 
  saved: {
  	type: Boolean 
  }
});

// Create the Model
var News = mongoose.model("News", NewsSchema);

// Export it for use elsewhere
module.exports = News;