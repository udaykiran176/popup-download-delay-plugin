/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-popup-delay-download block)' );
/* eslint-enable no-console */


document.addEventListener('DOMContentLoaded', function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('closePopupBtn');

    if (openPopupBtn && popup && closePopupBtn) {
        openPopupBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevents immediate file download
            popup.style.display = 'flex';
        });

        closePopupBtn.addEventListener('click', function () {
            popup.style.display = 'none';
        });

        // Optional: Close the popup if the user clicks outside of the popup content
        window.addEventListener('click', function (event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    let timeLeft = 30;
    const timerElement = document.getElementById("timer");
    const downloadLink = document.getElementById("download-link");

    const countdown = setInterval(() => {
        if (timeLeft > 1) {
            timeLeft--;
            timerElement.textContent = `${timeLeft} seconds remaining`;
        } else {
            clearInterval(countdown);
            timerElement.textContent = "Your download is ready!";
            downloadLink.style.display = "inline-block";
        }
    }, 1000);
});


