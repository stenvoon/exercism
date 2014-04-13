module.exports = function Robot() {
	"use strict";

	var name = "";

	function randomBetween(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function randomChar() {
		return String.fromCharCode(randomBetween(95,122));
	}

	function randomNumber() {
		return randomBetween(0,9);
	}

	function generateName() {
		return randomChar() + randomChar() + randomNumber() + randomNumber() + randomNumber();
	}

	return {
		get name() {
			if (name === "") { 
				name = generateName();
			}
			return name;
		},
		reset : function() {
			name = "";
		}
	};

};