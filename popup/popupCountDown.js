// Show the first popup when the page loads
window.onload = function () {
    document.getElementById("popup1").style.display = "block";

    // Start the countdown timer
    startCountdown();
};

// Close the first popup and show the second one
document.getElementById("closePopup1").onclick = function () {
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "block";

    // Start the countdown timer
    startTimer(10, document.getElementById("time"));
};

// Close the second popup (optional, if the user needs to close it manually)
document.getElementById("closePopup2").onclick = function () {
    document.getElementById("popup2").style.display = "none";
};

function startCountdown() {
    let timeLeft = 3;
    const countdownElement = document.getElementById("time");

    const timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            // Redirect to the specified URL
            window.location.href = "https://shre.ink/rt6X";
        }
    }, 1000);
}

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
        seconds = seconds < 3 ? "0" + seconds : seconds;

        // Update the display
        display.textContent = seconds;

        // Check if the timer has finished
        if (diff <= 0) {
            // Stop the timer and display "00"
            display.textContent = "00";
            clearInterval(timerInterval);

            // Redirect to the specified URL
            window.location.href = "https://shre.ink/rt6X";
        }
    }

    // Start the timer immediately
    timer();
    // Update the timer every second
    var timerInterval = setInterval(timer, 1000);
    // console.log("time");

}