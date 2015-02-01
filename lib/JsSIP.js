/**
 * Dependencies.
 */
var debug = require('debug')('JsSIP');
var pkg = require('../package.json');
var C = require('./Constants');
var Exceptions = require('./Exceptions');
var Utils = require('./Utils');
var UA = require('./UA');
var URI = require('./URI');
var NameAddrHeader = require('./NameAddrHeader');
var Grammar = require('./Grammar');
var RTCSession = require('./RTCSession');


debug('version %s', pkg.version);


/**
 * Expose the JsSIP module.
 */
var JsSIP = module.exports = {
  C: C,
  Exceptions: Exceptions,
  Utils: Utils,
  UA: UA,
  URI: URI,
  NameAddrHeader: NameAddrHeader,
  Grammar: Grammar,
  // Expose the debug module.
  debug: require('debug')
};


Object.defineProperties(JsSIP, {
  name: {
    get: function() { return pkg.title; }
  },

  version: {
    get: function() { return pkg.version; }
  },

  webrtc: {
    set: function(engine) {
      // If rtcninja is given, load it if not yet load.
      if (engine && engine.hasOwnProperty('called') && !engine.called) {
        engine();
      }

      UA.setWebRTC(engine);
      RTCSession.setWebRTC(engine);
    }
  }
});
