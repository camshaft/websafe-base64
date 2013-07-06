/**
 * Module dependencies
 */

var base64decode = require("base64-decode")
  , base64encode = require("base64-encode")
  , pad = require("pad");

/**
 * url-safe encode a string
 *
 * @param {String} string
 * @return {String}
 * @api public
 */

exports.encode = function(string) {
  return string
    ? base64encode(string)
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
    : '';
};

/**
 * url-safe decode a string
 *
 * @param {String} string
 * @return {String}
 * @api public
 */

exports.decode = function(string) {
  return string
    ? base64decode(padString(string)
      .replace(/\-/, '+')
      .replace(/_/, '/'))
    : '';
};

/**
 * Pad a string to the nearest 4
 *
 * @param {String} string
 * @return {String}
 * @api private
 */

function padString(string) {
  var mod = string.length % 4;

  // We don't require any padding
  if(!mod) return string;

  // See how much padding we need
  var rem = 4-mod;

  return pad(string, rem, "=");
};
