// Show the first popup when the page loads
window.onload = function() {
    document.getElementById('popup1').style.display = 'block';
};

// Close the first popup and show the second one
document.getElementById('closePopup1').onclick = function() {
    document.getElementById('popup1').style.display = 'none';

    // Show the second popup after a short delay
    setTimeout(function() {
        document.getElementById('popup2').style.display = 'block';
    }, 500); // Adjust the delay as needed
};

// Close the second popup
document.getElementById('closePopup2').onclick = function() {
    document.getElementById('popup2').style.display = 'none';
};
