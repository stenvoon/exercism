module.exports = function Anagram(word) {
	"use strict";

	var alphabetize = function(word) {
		return word.split('').sort().join('');
	};

	var match = function(words) {
		return words.filter(function(value) {
			var lowerCaseValue = value.toLowerCase();
			var lowerCaseWord = word.toLowerCase();
			return lowerCaseValue !== lowerCaseWord &&
			 		 alphabetize(lowerCaseValue) === alphabetize(lowerCaseWord);
		});
	};

	return { match : match };
};