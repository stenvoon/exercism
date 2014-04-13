module.exports = function(sequence) {

	function shortest(a, b) {
		return a.length < b.length ? a.length : b.length;
	}

	this.hammingDistance = function(input){
		var distance = 0;
		var lengthOfShortestString = shortest(input, sequence);

		for (var i = 0; i < lengthOfShortestString; i++) {
			if (sequence[i] !== input[i]) { distance++; }
		}
		return distance;
	};
};

