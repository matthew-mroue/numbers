function getRandom() {
    return Math.ceil(Math.random() * 10);  // multiply by ten to get closer to integer, ciel to round up
  }
  
  const generatedNum = getRandom();                            // generate a random number
  console.log(generatedNum);
  
  do {
    guess = window.prompt("I'm thinking of a number between 1 and 10. Guess a number.");
    guess = Number(guess); // convert string to number
  
    if (guess < generatedNum) {
      console.log("Not a match.");
    } else if (guess > generatedNum) {
      console.log("Not a match.");
    } else {
      console.log("Match.");
    }
  
  } while (guess !== generatedNum);