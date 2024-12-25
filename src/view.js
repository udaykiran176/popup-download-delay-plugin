document.addEventListener('DOMContentLoaded', function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const timerElement = document.getElementById('timer');
    const downloadLink = document.getElementById('download-link');

    if (openPopupBtn && popup && closePopupBtn && timerElement && downloadLink) {
        openPopupBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent immediate file download
            popup.style.display = 'flex';

            // Get the timer duration from the popup element's data attribute
            let timeLeft = parseInt(popup.dataset.timerDuration, 10) || 30; // Default to 30 seconds if undefined

            // Update the timer UI and start the countdown
            timerElement.textContent = `${timeLeft} seconds remaining`;
            downloadLink.style.display = 'none'; // Hide the download link initially

            const countdown = setInterval(() => {
                timeLeft--;
                if (timeLeft > 0) {
                    timerElement.textContent = `${timeLeft} seconds remaining`;
                } else {
                    clearInterval(countdown);
                    timerElement.textContent = 'Your download is ready!';
                    downloadLink.style.display = 'inline-block'; // Show the download link
                }
            }, 1000);
        });

        closePopupBtn.addEventListener('click', function () {
            popup.style.display = 'none'; // Close the popup
        });

        // Optional: Close the popup when clicking outside of the content
        window.addEventListener('click', function (event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});
