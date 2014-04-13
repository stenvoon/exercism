module.exports = function(year) {
	"use strict";

	return (year % 4 === 0 && year % 100 !== 0) ||
				(year % 100 === 0 && year % 400 === 0);

};