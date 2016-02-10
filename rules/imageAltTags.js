function ImageAltTags () {
	
}

ImageAltTags.prototype.matches = function (element) {
	return element.name == 'img';
};

ImageAltTags.prototype.lint = function(element) {
	var result;
	if (typeof element.attribs !== 'undefined' && typeof element.attribs.alt !== 'undefined' && element.attribs.alt !== '') {
		return {
			pass: true,
			message: 'Img tag includes an alt attribute'
		};
	} else {
		return {
			pass: false,
			message: 'Img tag is missing an alt attribute'
		};
	}
};

module.exports = ImageAltTags;