(ns bob)

(defn shouting? [input] 		
	(and 
		(= (.toUpperCase input) input)
		(some #(Character/isLetter %) input))
)

(defn silence? [input]
	(empty? (.trim input)))

(defn questioning? [input]
	(= \? (last input)))

(defn response-for 
	"Bob the lackadaisical teenager says:"
	[input]
	(cond
		(silence? input) "Fine. Be that way!"
		(shouting? input) "Woah, chill out!"
		(questioning? input) "Sure."
		:else "Whatever." ))

