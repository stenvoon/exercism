module.exports = function(sequence) {

	function shortest(a, b) {
		return a.length < b.length ? a : b;
	}

	this.hammingDistance = function(input){
		var distance = 0;
		var shorterString = shortest(input, sequence);
		var longerString = (shorterString === input ? sequence : input);

		for (var i = 0; i < shorterString.length; i++) {
			if (shorterString[i] !== longerString[i]) {
				distance++;
			}
		}
		return distance;
	};
};

