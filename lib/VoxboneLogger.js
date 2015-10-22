var info = function () {return undefined;};
var error = function () {return undefined;};
module.exports = { loginfo : function () { 
					var args = Array.prototype.slice.call(arguments);
					info.apply(console,args);
					},
		   logerror : function() { 
					var args = Array.prototype.slice.call(arguments);
					error.apply(console,args);
					},
		   setError : function(fn) { error = fn; },
		   setInfo : function(fn) { info = fn; }
		};
