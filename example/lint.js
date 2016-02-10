var OpenLint = require('../openlint');
var fs = require('fs');

var linter = new OpenLint();

fs.readFile("./html/test.html", "utf8", function (error, html) {
    var results = linter.lint(html)
	console.log(results);
});
