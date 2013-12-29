var express = require('express')
  , poweredBy = require('connect-powered-by');

module.exports = function() {
  this.use(express.methodOverride());
  this.use(this.router);
}
