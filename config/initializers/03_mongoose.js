module.exports = function() {
  this.mongoose = require('mongoose');
  this.mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/rubens");
  var mongooseTypes = require("mongoose-types");
  mongooseTypes.loadTypes(this.mongoose);
}
