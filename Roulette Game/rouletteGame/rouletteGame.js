// document.addEventListener("DOMContentLoaded", () => {
//   const spinBtn = document.querySelector(".spin-btn");
//   const wheel = document.querySelector(".wheel");
//   const multiplierDisplay = document.querySelector(".multiplier");
//   let isSpinning = false; // Flag to prevent multiple spins at once

//   function spinWheel() {
//     if (isSpinning) return; // Prevent multiple spins during animation

//     isSpinning = true; // Set flag to true when the spin starts
//     wheel.classList.remove("spin-animation"); // Reset any previous spin

//     // Calculate a random number of degrees (between 5 to 10 full rotations)
//     const randomDegrees = Math.floor(Math.random() * 1800) + 360; // Random between 360 and 2160 degrees

//     // Set a small timeout to allow class removal to take effect
//     setTimeout(() => {
//       // Apply the rotation
//       wheel.style.transform = `rotate(${randomDegrees}deg)`;
//       wheel.classList.add("spin-animation");
//     }, 100);

//     // Generate a random multiplier to display after the spin
//     const randomMultiplier = (Math.random() * (14 - 10) + 10).toFixed(2);

//     // Wait for the animation to finish and then display the result
//     setTimeout(() => {
//       multiplierDisplay.textContent = randomMultiplier;
//       isSpinning = false; // Reset the spinning flag after the animation ends
//     }, 4000); // Match this duration with the animation time
//   }

//   spinBtn.addEventListener("click", spinWheel);
// });

document.addEventListener('DOMContentLoaded', () => {
    const spinBtn = document.querySelector('.spin-btn');
    const wheel = document.querySelector('.wheel');
    const multiplierDisplay = document.querySelector('.multiplier');
    let isSpinning = false; // Flag to prevent multiple spins at once

    function spinWheel() {
        if (isSpinning) return; // Prevent multiple spins during animation

        isSpinning = true; // Set flag to true when the spin starts
        wheel.classList.remove('spin-animation'); // Reset any previous spin

        // Calculate a random number of degrees (between 5 to 10 full rotations)
        const randomDegrees = Math.floor(Math.random() * 1800) + 360; // Random between 360 and 2160 degrees

        // Set a small timeout to allow class removal to take effect
        setTimeout(() => {
            // Apply the rotation
            wheel.style.transform = `rotate(${randomDegrees}deg)`;
            wheel.classList.add('spin-animation');
        }, 100); 

        // Generate a random multiplier to display after the spin
        const randomMultiplier = (Math.random() * (14 - 10) + 10).toFixed(2);

        // Wait for the animation to finish and then display the result
        setTimeout(() => {
            multiplierDisplay.textContent = randomMultiplier;
            isSpinning = false; // Reset the spinning flag after the animation ends
        }, 4000); // Match this duration with the animation time
    }

    spinBtn.addEventListener('click', spinWheel);
});
