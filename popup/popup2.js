        // Show the first popup when the page loads
        window.onload = function () {
          document.getElementById("popup1").style.display = "block";
      };

      // Close the first popup and show the second one
      document.getElementById("closePopup1").onclick = function () {
          document.getElementById("popup1").style.display = "none";
          document.getElementById("popup2").style.display = "block";

          // Start the countdown timer
          startCountdown();
      };

      // Close the second popup (optional, if the user needs to close it manually)
      document.getElementById("closePopup2").onclick = function () {
          document.getElementById("popup2").style.display = "none";
      };

      function startCountdown() {
          let timeLeft = 5;
          const countdownElement = document.getElementById('countdown');

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