module.exports = (function toRna(dnaBase) {
	"use strict";

	return dnaBase.split('').map(function(currentBase) {
		switch(currentBase) {
			case 'C' : return 'G';
			case 'G' : return 'C';
			case 'A' : return 'U';
			case 'T' : return 'A';
		}
	}).join('');

});

