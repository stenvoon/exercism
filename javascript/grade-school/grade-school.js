module.exports = function() {
	"use strict";

	var database = {};

	this.roster = function() {
		return database;
	};

	this.add = function(name, grade) {
		if (database.hasOwnProperty(grade)) {
			database[grade].push(name);
			database[grade].sort();
		} else {
			database[grade] = [name];
		} 
	};

	this.grade = function(grade) {
		return database.hasOwnProperty(grade) ? database[grade] : [];
	};
};