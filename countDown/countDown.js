function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      seconds;

  function timer() {
      // Calculate the time remaining
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // Calculate seconds
      seconds = diff % 60;

      // Format seconds
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Update the display
      display.textContent = seconds;

      // Check if the timer has finished
      if (diff <= 0) {
          // Stop the timer and display "00"
          display.textContent = "00";
          clearInterval(timerInterval);

          // Redirect to the specified URL
          // window.location.href = "https://shre.ink/rt6X";
      }
  }

  // Start the timer immediately
  timer();
  // Update the timer every second
  var timerInterval = setInterval(timer, 1000);
}

window.onload = function () {
  var threeSeconds = 3,  // Change duration to 3 seconds
      display = document.querySelector("#time");
  startTimer(threeSeconds, display);
};

