var express = require('express'),
    passport = require('passport');

module.exports = function() {
  // Session storage
  var MongoStore = require('connect-mongo')(express);
  this.use(express.session({
      secret: process.env.SESSION_SECRET || 'defaultsecret42', 
      store: new MongoStore({
        mongoose_connection: this.mongoose.connections[0]
      })
    })
  );
  
  // Initialize Passport
  this.use(passport.initialize());
  this.use(passport.session());
}
