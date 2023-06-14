// Set the target date for the countdown
const targetDate = new Date('July 1, 2023 00:00:00 UTC').getTime();

// Function to update the countdown timer
function updateCountdown() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining in milliseconds
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the README
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left.`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
