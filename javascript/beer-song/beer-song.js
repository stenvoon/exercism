module.exports = (function() {
	"use strict";

	var oneLess = function (count) {
		if (count === 1) {
			return "no more";
		}
		return count - 1;
	};

	var pluarlize = function (count) {
		if (count > 1) {
			 return "bottles";
		} else if (count === 1) {
			return "bottle";
		}
	};

	var subject = function (count) {
		if (count === 1) {
			return "it";
		}
		return "one";
	};

	var verse = function (count) {
		var whatOnTheWall = pluarlize(count);

		return count + " " + whatOnTheWall + " of beer on the wall, " + count + " " + whatOnTheWall + " of beer.\n"
		 + "Take " + subject(count) + " down and pass it around, " + oneLess(count) + " bottles of beer on the wall.\n";
	};

	return { verse : verse };

})(this);

