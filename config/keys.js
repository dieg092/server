// key.js - figure out what of credentials to return
if (process.env.NODE_ENV === 'production') {
  // We are in poruction - return the prod set of keys
  module.exports = require('./dev');
} else {
  // We are in development - return the prod dev of keys
  module.exports = require('./dev');
}
