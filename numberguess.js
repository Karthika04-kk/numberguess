let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.addEventListener("DOMContentLoaded", () => {
  const guessInput = document.getElementById("guessInput");
  const checkBtn = document.getElementById("checkBtn");
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");
  const resetBtn = document.getElementById("resetBtn");

  checkBtn.addEventListener("click", () => {
    const userGuess = Number(guessInput.value); // Convert input to number

    if (!userGuess || userGuess < 1 || userGuess > 100) {
      message.textContent = "⚠️ Please enter a number between 1 and 100.";
      message.style.color = "orange";
      return;
    }

    attempts++;
    attemptsText.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
      message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
      message.style.color = "green";
      checkBtn.disabled = true;
    } else if (userGuess > randomNumber) {
      message.textContent = "📉 Too High! Try again.";
      message.style.color = "red";
    } else {
      message.textContent = "📈 Too Low! Try again.";
      message.style.color = "red";
    }

    guessInput.value = "";
    guessInput.focus();
  });

  resetBtn.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    attemptsText.textContent = "Attempts: 0";
    guessInput.value = "";
    checkBtn.disabled = false;
  });
});
