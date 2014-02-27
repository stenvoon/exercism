module.exports = function (words) {
	"use strict";

	var sanitize = function(words) {
		return words.replace(/[,!@$%\^&*:]/g, '').toLowerCase();
	};

	var frequencies = function(result, word) {
		result.hasOwnProperty(word) ? result[word]++ : result[word] = 1;
		return result;
	};

	var parts = sanitize(words).split(/\s+/);
	return parts.reduce(frequencies, {});
};

