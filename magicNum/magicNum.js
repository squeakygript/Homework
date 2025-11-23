while (true) {
  let magicMum = Math.floor(Math.random() * 10) + 1;
  let userInput = prompt("Guess a number between 1 and 10");
  if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    alert("Please enter a valid number between 1 and 10.");
    continue;
  }
  for (let i = 0; i <= 2; i++) {
    if (i == 2 && userInput != magicMum) {
      alert(
        "Sorry, you've used all your attempts. The magic number was " + magicMum
      );
      break;
    } else if (userInput == magicMum) {
      alert("Congratulations! You guessed the magic number " + magicMum);
      break;
    } else if (userInput < magicMum) {
      userInput = prompt("Too low! Try again:");
    } else {
      userInput = prompt("Too high! Try again:");
    }
  }
  let playAgain = confirm("Do you want to play again?");
  if (!playAgain) {
    break;
  }
}
