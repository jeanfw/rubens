var express = require('express')
  , poweredBy = require('connect-powered-by');

module.exports = function() {

  // Log requests
  if ('development' == this.env) {
    this.use(express.logger({ format: 'dev' }));
  }
  
  // Credits to Jared Hanson for his fantastic Locomotive framework
  this.use(poweredBy('Locomotive'));
  
  // Parse cookies and request body
  this.use(express.cookieParser());
  this.use(express.bodyParser());
  
  // Enables GZip compression
  this.use(express.compress());
  
  // Locate public front-end files
  // Static files are in /public, so /img/img.png serves /public/img/img.png
  // Should be above express.session and passport.session middlewares 
  // to avoid deserializing for each asset that's loaded, which causes lots of unnecessary DB reads
  var oneDay = 86400000;
  this.use(express.static(require('path').resolve(__dirname + "/../../public"), { maxAge: oneDay }));
  
  // Serve favicon for browsers and servers that use the convention, 
  // without checking the link rel=favicon present in the header
  // This will reduce load on session store as well
  this.use(express.favicon());
}
