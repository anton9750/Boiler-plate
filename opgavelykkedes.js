const modal = document.getElementById("modal");
const openbtn = document.getElementById("open-btn");
const closebtn = document.getElementById("close-btn");
const form = document.getElementById("form");

const nameField = document.getElementById("name");
const efternavnField = document.getElementById("efternavn");
const emailField = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Email regex
const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

openbtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
});

closebtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameField.value.trim().length < 2) {
    alert("Name must be at least 2 characters long.");
    return;
  }

  if (efternavnField.value.trim().length < 2) {
    alert("Efternavn must be at least 2 characters long.");
    return;
  }

  if (!emailregex.test(emailField.value.trim())) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.value.trim().length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
  modal.classList.add("hidden");
});

const bigImageContainer = document.querySelector(".big-image img");
const smallImages = Array.from(document.querySelectorAll(".small-images img"));

smallImages.forEach((smallImg, index) => {
  smallImg.addEventListener("click", () => {
    const temp = bigImageContainer.src;
    bigImageContainer.src = smallImg.src;
    smallImg.src = temp;
  });
});
