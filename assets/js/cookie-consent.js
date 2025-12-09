//    <div id="cookie-consent">
//     <div id="cookie-box">
//         <p>We use cookies to improve your experience. Do you accept?</p>
//         <button id="accept-cookies">Accept</button>
//         <button id="decline-cookies">Decline</button>
//     </div>
// </div>




const cookieBox = document.getElementById("cookie-consent");
const acceptBtn = document.getElementById("accept-cookies");
const declineBtn = document.getElementById("decline-cookies");

// Show the popup every time the page loads
cookieBox.classList.add("show");

// Hide the popup when buttons are clicked
acceptBtn.addEventListener("click", () => {
    cookieBox.classList.remove("show");
});

declineBtn.addEventListener("click", () => {
    cookieBox.classList.remove("show");
});









