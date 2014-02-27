module.exports = function (word) {
	"use strict";

	var alphabetize = function(input) {
		return input.split('').sort().join('');
	};

	var match = function(words) {
		var lowerCaseWord = word.toLowerCase();

		return words.filter(function(value) {
			var lowerCaseValue = value.toLowerCase();
			return lowerCaseValue !== lowerCaseWord &&
			 		 alphabetize(lowerCaseValue) === alphabetize(lowerCaseWord);
		});
	};

	return { match : match };
};