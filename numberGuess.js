const readline = require('readline');

// Correct answer
const correctAnswer = 5;

// Initialize a variable to store the user's guess
let userGuess;

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask the user to guess a number
function askGuess() {
  rl.question("Guess a number between 1 and 10: ", (input) => {
    // Convert the user's input to a number
    userGuess = parseInt(input);

    // Check if the user's guess is correct
    if (userGuess === correctAnswer) {
      console.log("Correct!");
      rl.close(); // Close the readline interface when the guess is correct
    } else if (userGuess > correctAnswer) {
      console.log("Too high!");
      askGuess(); // Ask again if the guess is too high
    } else {
      console.log("Too low!");
      askGuess(); // Ask again if the guess is too low
    }
  });
}

// Start the guessing game
askGuess();
