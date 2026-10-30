function guessNumberGame() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  

  let guess;

  while (guess !== randomNumber) {
    guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess > randomNumber) {
      alert("Too high!");
    } else if (guess < randomNumber) {
      alert("Too low!");
    } else {
      alert("Correct! You guessed it!");
    }
  }
}

guessNumberGame();