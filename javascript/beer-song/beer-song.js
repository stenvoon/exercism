module.exports = (function() {
	"use strict";

	var songPattern = "{count} {bottle} of beer on the wall, {count} {bottle} of beer.\n" +
				"{action}, {remaining} of beer on the wall.\n";

	var songPatternCompile = function (count) {
		return capitalize(songPattern.replace(/{count}/g, formatCount(count))
								.replace(/{bottle}/g, pluarlize(count))
								.replace(/{action}/, formatAction(count))
								.replace(/{remaining}/, formatRemaining(count)));
	};

	var capitalize = function (str) {
		return str.charAt(0).toUpperCase() + str.substring(1);
	};

	var formatCount = function(count) {
		return (count === 0) ? "no more" : count;
	};

	var formatAction = function(count) {
		if (count > 0) {
			return "Take " + (count === 1 ? "it" : "one") + " down and pass it around";
		}
		return "Go to the store and buy some more";
	};

	var formatRemaining = function (count) {
		switch(count) {
			case 0  : return "99 bottles";
			case 1  : return "no more bottles";
			default : return (count - 1) + " " + pluarlize(count - 1);
		}
	};

	var pluarlize = function (count) {
		return (count === 1) ? "bottle" : "bottles";
	};

	var verse = function (count) {
		return songPatternCompile(count);
	};

	var sing = function(startCount, endCount) {
		var song = [];

		for (var i = startCount; i >= (endCount || 0); i--) {
			song.push(verse(i));
		}

		return song.join("\n");
	};

	return { verse : verse , sing : sing };

})(this);

