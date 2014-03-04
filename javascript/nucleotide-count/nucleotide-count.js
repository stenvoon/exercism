var DNA = function(sequence) {

	var nucleotideCounts = { A : 0, T : 0, C : 0, G : 0 };

	var count = function(nucleotide) {
		return 0;
	};

	return { 
		nucleotideCounts : nucleotideCounts, 
		count : count
	};

};

module.exports = DNA;