let number = Math.floor(Math.random() * 1000) ;


let numInput = document.getElementById("numInput");
let guessButton = document.getElementById("guessButton");

// add an event listener to the button to handle guesses
guessButton.addEventListener("click", function() {
  // get the player's guess from the input field
  let guess = parseInt(numInput.value);

  // check if the guess is correct
  if (guess === number) {
    // if the guess is correct, display a message and generate a new random number
    alert("Congratulations!!! You guessed the correct number");
    //numberToGuess = Math.floor(Math.random() * 1000) ;
  } else if (guess > number) {
    // if the guess is too high, display a message and clear the input field
    alert("Too high!! Try Again");
    numInput.value = "";
  } else {
    // if the guess is too low, display a message and clear the input field
    alert("Too low!! Try Again");
    numInput.value = "";
  }
});