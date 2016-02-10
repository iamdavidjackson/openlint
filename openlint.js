var Parser = require('./parser');
var rules = require('./rules');

var parser = new Parser({});

function OpenLint () {
	this.rules = [
		'imageAltTags'
	];
	this.rulesCount = this.rules.length;
}

OpenLint.prototype.lint = function (html) {
	this.results = [];
	var elements = parser.parse(html);
	this.lintElements(elements);
	
	return this.results; 
};

OpenLint.prototype.lintElements = function(elements) {
	var elementsCount = elements.length;

	// loop through all the elements and apply rules
	for (var i = 0; i < elementsCount; i++) {
		this.applyRules(elements[i]);

		// check if the element has children and lint those if so
		if (typeof elements[i].children !== 'undefined' && elements[i].children.length > 0) {
			this.lintElements(elements[i].children);
		}
	}
};

OpenLint.prototype.applyRules = function(element) {
	for (var i = 0; i < this.rulesCount; i++) {
		var rule = rules[this.rules[i]];
		if (rule.matches(element)) {
			this.results.push(rule.lint(element));
		}
	}
};

module.exports = OpenLint;
