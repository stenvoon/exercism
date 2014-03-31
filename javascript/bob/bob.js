var Bob = function() {

	var silence = function(input) {
		return /^\s*$/.test(input);
	};

	var shouting = function(input) {
		var isUpperCase = function(input) {
			return input.toUpperCase() === input;
		};

		var containsAnyLetters = function(input) {
			return /[a-zA-Z]+/.test(input);
		};

		return isUpperCase(input) && containsAnyLetters(input);
	};

	var askingAQuestion = function(input) {
		return /\?$/.test(input);
	};

	var hey = function(greeting) {
		if (silence(greeting)) return 'Fine. Be that way!';
		if (shouting(greeting)) return 'Woah, chill out!';
		if (askingAQuestion(greeting)) return 'Sure.';

		return 'Whatever.';
	};

	return { hey : hey };
};

module.exports = Bob;
