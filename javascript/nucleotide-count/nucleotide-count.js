module.exports = function DNA(sequence) {
	"use strict";

	var nucleotideCounts = countNucleotides(sequence),
		validNucleotides = "ATCGU";

	function calculateCounts (currentCounts, value) {
		currentCounts[value]++;
		return currentCounts;
	}

	function countNucleotides (sequence) {
		return sequence
				.split('')
				.reduce(calculateCounts, { A : 0, T : 0, C : 0, G : 0 });
	}

	function count (nucleotide) {
		if (validNucleotides.indexOf(nucleotide) === -1) throw new Error("Invalid Nucleotide");
		return nucleotideCounts[nucleotide] || 0;
	}

	return { 
		nucleotideCounts : nucleotideCounts, 
		count : count
	};

};

