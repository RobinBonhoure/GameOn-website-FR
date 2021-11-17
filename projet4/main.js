// DOM Elements
const closeButton = document.querySelector("#close-modal");

// close modal event
closeButton.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}