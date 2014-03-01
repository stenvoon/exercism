module.exports = (function() {
	"use strict";

	var songPattern = "{count} {bottle} of beer on the wall, {count} {bottle} of beer.\n" +
				"{action}, {oneLess} {oneLessBottle} of beer on the wall.\n";

	var songPatternCompile = function (count) {
		var song = songPattern.replace(/{count}/g, howMany(count));
		song = song.replace(/{bottle}/g, pluarlize(count));
		song = song.replace(/{action}/, doAction(count));
		song = song.replace(/{oneLess}/, oneLess(count));
		song = song.replace(/{oneLessBottle}/, pluarlize(count-1))
		return song.charAt(0).toUpperCase() + song.substring(1);
	};

	var doAction = function(count) {
		if (count > 0) {
			return "Take {subject} down and pass it around".replace(/{subject}/, subject(count));
		}
		return "Go to the store and buy some more";
	};

	var howMany = function(count) {
		if (count === 0) {
			return "no more";
		}
		return count;
	};

	var oneLess = function (count) {
		if (count === 0) {
			return 99;
		} else if (count === 1) {
			return "no more";
		}
		return count - 1;
	};

	var pluarlize = function (count) {
		if (count === 1) {
			 return "bottle";
		}
		return "bottles";
	};

	var subject = function (count) {
		if (count === 1) {
			return "it";
		}
		return "one";
	};

	var verse = function (count) {
		return songPatternCompile(count);
	};

	var sing = function(startingCount, finishingCount) {
		if (finishingCount === undefined) {
			finishingCount = 0;
		}

		var song = "";
		while (startingCount >= finishingCount) {
			song = song + verse(startingCount) + "\n";
			startingCount--;
		}
		return song.substring(0, song.length-1);
	};

	return { verse : verse , sing : sing };

})(this);

