var util = require('util');
var htmlparser = require('htmlparser2');

function DomHandler () {
	htmlparser.DomHandler.apply(this, Array.prototype.slice.call(arguments));
};

util.inherits(DomHandler, htmlparser.DomHandler);

DomHandler.prototype.setParser = function (parser) {
	this.parser = parser;
};

module.exports = DomHandler;

