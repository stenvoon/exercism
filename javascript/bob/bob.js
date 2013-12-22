var Bob = function() {

	var hey = function(greeting) {
		if (silence(greeting)) {
			return 'Fine. Be that way!';
		} else if (shouting(greeting)) {
			return 'Woah, chill out!'
		} else if (askingAQuestion(greeting)) {
			return 'Sure.';
		} else {
			return 'Whatever.';
		}
	};

	var silence = function(input) {
		return /^\s*$/.test(input);
	}

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

	return { hey : hey };
};

module.exports = Bob;
