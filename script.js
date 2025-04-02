document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle');

    // Set initial button text based on current theme
    if (document.body.classList.contains('light')) {
        toggleButton.textContent = 'Switch to Dark Theme';
    } else {
        toggleButton.textContent = 'Switch to Light Theme';
    }

    toggleButton.addEventListener('click', () => {
        // Toggle light class on body and container
        document.body.classList.toggle('light');
        document.querySelector('.container').classList.toggle('light');
        toggleButton.classList.toggle('light');

        // Change button text based on theme
        if (document.body.classList.contains('light')) {
            toggleButton.textContent = 'Switch to Dark Theme';
        } else {
            toggleButton.textContent = 'Switch to Light Theme';
        }
    });
});
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the current theme in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Load the theme from localStorage on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode'); // Toggle light mode
    body.classList.toggle('dark-mode');  // Toggle dark mode

    // Save the current theme in localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Load the theme from localStorage on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
};
document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("background-music");

    // Function to play music
    function playMusic() {
        music.play();
    }

    // Function to pause music
    function pauseMusic() {
        music.pause();
    }

    // Example: Play music when the page loads
    playMusic();
});