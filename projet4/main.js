// DOM Elements
const closeButton = document.querySelector("#close-modal");
var firstInput = document.getElementById("first");
var lastInput = document.getElementById("last");
var emailInput = document.getElementById("email");

// close modal event
closeButton.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// submit form
function validate(event) {
    event.preventDefault();

    let first = document.forms["reserve"]["first"].value;
    let last = document.forms["reserve"]["last"].value;
    let email = document.forms["reserve"]["email"].value;

    checkName (first);
    checkName (last);
    checkEmail (email);

    if (first == "") {
        var errorMsgFirst = document.createElement("span");
        errorMsgFirst.className = "error-message error-first";
        errorMsgFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        printError(firstInput, errorMsgFirst);
    } else {
        document.querySelector(".error-first").remove();
    }
    if (last == "") {
        var errorMsgLast = document.createElement("span");
        errorMsgLast.className = "error-message";
        errorMsgLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        printError(lastInput, errorMsgLast);
    }
    if (email == "") {
        var errorMsgEmail = document.createElement("span");
        errorMsgEmail.className = "error-message";
        errorMsgEmail.innerHTML = "Veuillez entrer une adresse email valable.";
        printError(emailInput, errorMsgEmail);
    }
    // else {
    //     closeModal();
    //     console.log(first);
    // }



}

// check first
function checkEmail (input) {
    const reMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reMail.test(String(input).toLowerCase());
}

function checkName (input) {
    const reName = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    return reName.test(String(input).toLowerCase());
}


// print error messages
function printError(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}