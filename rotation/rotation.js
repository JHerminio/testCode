const rouletteWheel = document.querySelector('.rotationImage4-wheel');

// Example: Start/Stop rotation
document.getElementById('toggleRotation').addEventListener('click', function() {
    if (rouletteWheel.style.animationPlayState === 'paused') {
        rouletteWheel.style.animationPlayState = 'running';
    } else {
        rouletteWheel.style.animationPlayState = 'paused';
    }
});

// Example: Adjust speed
document.getElementById('speedControl').addEventListener('input', function(event) {
    const speed = event.target.value; // Assume this is a range input
    rouletteWheel.style.animationDuration = `${speed}s`;
});
