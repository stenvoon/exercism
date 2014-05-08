(ns bob)

(defn shouting? [input] 		
	(and 
		(every? #(or (not (Character/isLetter %)) (Character/isUpperCase %)) input)
		(some #(Character/isLetter %) input))
)

(defn response-for 
	"Bob the lackadaisical teenager says:"
	[input]
	(cond
		(empty? (.trim input)) "Fine. Be that way!"

		(shouting? input) "Woah, chill out!"

		(= \? (last input)) "Sure."
		
		:else "Whatever."
		)
	)

