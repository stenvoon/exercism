module.exports = function(number) {
	"use strict";

	function isInvalid(number){
		return number.length < 10 || (number.length == 11 && number[0] !== '1');
	}

	function clean(number){
		var cleaned = number.replace(/[\(\)-\s\.]/g, '');

		if (isInvalid(cleaned)) {
			return "0000000000";
		}

		if (cleaned.length == 11) {
			return cleaned.substr(1);
		}

		return cleaned;
	}

	this.number = function(){
		return clean(number);
	};

	this.areaCode = function(){
		return clean(number).substr(0,3);
	};

	this.toString = function(){
		var cleaned = clean(number);
		return "(" + cleaned.substr(0,3) + ") " + cleaned.substr(3,3) + "-" + cleaned.substr(6); 
	};
};
