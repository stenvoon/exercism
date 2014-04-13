module.exports = function(number) {
	"use strict";

	function clean(number){ 
		var cleaned = number.replace(/[\(\)-\s\.]/g, '');
		if (cleaned.length == 11) {
			if (cleaned[0] === '1') {
				cleaned = cleaned.substr(1, 10);
			} else {
				cleaned = "0000000000";
			}
		} else if (cleaned.length == 9) {
			cleaned = "0000000000";
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
