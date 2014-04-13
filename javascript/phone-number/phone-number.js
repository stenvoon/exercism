module.exports = function(number) {
	"use strict";

	function clean(number){
		var cleaned = number.replace(/[\(\)-\s\.]/g, '');

		if (cleaned.length == 11) {
			return cleaned[0] === '1' ? cleaned.substr(1) : "0000000000";
		}

		if (cleaned.length < 10) {
			return "0000000000";
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
