// Get references to HTML elements
var video = document.getElementById('myVideo');
var continueCircle = document.getElementById('continueCircle');
var arrowContainer = document.getElementById('arrow-container');

// Time in seconds when the video should pause
var pauseTime = 3;

// Event listener to pause the video at the specified time
video.addEventListener('timeupdate', function pauseAtTime() {
    if (video.currentTime > pauseTime) {
        video.pause();
        video.removeEventListener('timeupdate', pauseAtTime); // Remove the listener once it's triggered
        continueCircle.style.display = 'block'; // Show the continue circle
        arrowContainer.style.display = 'block'; // Show the arrow container
        arrowContainer.classList.add('show-arrow'); // Add class to start the arrow animation
    }
});

// Event listener to continue the video when the continue circle is clicked
continueCircle.addEventListener('click', function() {
    continueCircle.style.display = 'none'; // Hide the continue circle
    arrowContainer.style.display = 'none'; // Hide the arrow container
    arrowContainer.classList.remove('show-arrow'); // Remove class to stop the arrow animation
    video.play(); // Resume the video
});
