module.exports = function() {
	"use strict";

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

	this.name = generateName();

	this.reset = function() {
		this.name = generateName();
	};
};