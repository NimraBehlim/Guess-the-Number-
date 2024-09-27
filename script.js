var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempt = 0;

var guessInput = document.getElementById("guessInput");
var feedback = document.getElementById("feedback");
var attemptDisplay = document.getElementById("attempt");
var guessButton = document.getElementById("guessButton");
var resetButton = document.getElementById("resetButton");

guessButton.addEventListener("click", () => {
    var userGuess = Number(guessInput.value);
    attempt++;
    
    if (userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (userGuess < randomNumber) {
        feedback.textContent = "Too low!";
    } else if (userGuess > randomNumber) {
        feedback.textContent = "Too high!";
    } else {
        feedback.textContent = `Correct! The number was ${randomNumber}. You guessed it in ${attempt} attempt.`;
        guessButton.style.display = "none";
        resetButton.style.display = "inline-block";
    }

    attemptDisplay.textContent = `Attempt: ${attempt}`;
});

resetButton.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    guessInput.value = "";
    feedback.textContent = "";
    attemptDisplay.textContent = "";
    guessButton.style.display = "inline-block";
    resetButton.style.display = "none";
});
