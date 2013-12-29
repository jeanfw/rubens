module.exports = function() {
  this.mongoose = require('mongoose');
  this.mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/rubens");
}
