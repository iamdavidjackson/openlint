var _ = require('lodash');
var htmlparser = require('htmlparser2');
var DomHandler = require('./domHandler');

function Parser (options) {
	options = _.assign(options, defaultOptions);

	this.domHandler = new DomHandler();

	this.parser = new htmlparser.Parser(this.domHandler, options);

	this.domHandler.setParser(this.parser);
};

var defaultOptions = {
	decodeEntities : true
};

Parser.prototype.parse = function (html) {
	this.parser.write(html);
    this.parser.end();

    return this.domHandler.dom;
};

module.exports = Parser;
