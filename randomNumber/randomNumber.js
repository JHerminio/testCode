function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 9) + 90;
    document.getElementById("randomNumber").textContent = randomNumber;
    const randomNumber2 = Math.floor(Math.random() * 6) + 85;
    document.getElementById("randomNumber2").textContent = randomNumber2;
    const randomNumber3 = Math.floor(Math.random() * 6) + 80;
    document.getElementById("randomNumber3").textContent = randomNumber3;
    const randomNumber4 = Math.floor(Math.random() * 6) + 75;
    document.getElementById("randomNumber4").textContent = randomNumber4;
  }

  window.onload = generateRandomNumber;