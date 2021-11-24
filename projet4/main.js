// DOM Elements
const closeButton = document.querySelector("#close-modal");
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const validation = document.getElementById("validation");
const conditionsRadio = document.getElementById("checkbox1");

// VAR
var first;
var last;
var email;
var errorMsgFirstPrinted = false;
var errorMsgLastPrinted = false;
var errorMsgEmailPrinted = false;
var informations = [];
var firstChecked = false;

// close modal event
closeButton.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// submit form
function validate(event) {
    event.preventDefault();

    // inputs value
    first = document.forms["reserve"]["first"].value;
    last = document.forms["reserve"]["last"].value;
    email = document.forms["reserve"]["email"].value;
    birthdate = document.forms["reserve"]["birthdate"].value;
    quantity = document.forms["reserve"]["quantity"].value;
    location1 = document.forms["reserve"]["location1"].value;
    console.log(location1);

    // get all form data
    const data = Object.fromEntries(new FormData(document.querySelector('form')).entries());
    console.log(data.first)

    checkFirst(data.first);
    checkLast(data.last);
    checkEmail(data.email);
    checkConditions(conditionsRadio);


}

// check utilisation conditions
function checkConditions(radio) {
    console.log(radio.checked);
}

// check first
function checkFirst(input) {
    var regex = eval(jsonObj.first['regex']);
    var errorMessage = jsonObj.first['errorMessage'];
    if (regex.test(String(input).toLowerCase())) {
        if (errorMsgFirstPrinted == true) {
            document.querySelector(".error-first").remove();
            errorMsgFirstPrinted = false;
        }
        firstChecked = true;
    } else {
        if (errorMsgFirstPrinted == false) {
            var errorMsgFirst = document.createElement("span");
            errorMsgFirst.className = "error-message error-first";
            errorMsgFirst.innerHTML = `${errorMessage}`;
            printError(firstInput, errorMsgFirst);
            errorMsgFirstPrinted = true;
        }
    }
}

// check last
function checkLast(input) {
    var regex = eval(jsonObj.last['regex']);
    var errorMessage = jsonObj.last['errorMessage'];
    if (regex.test(String(input).toLowerCase())) {
        if (errorMsgLastPrinted == true) {
            document.querySelector(".error-last").remove();
            errorMsgLastPrinted = false;
        }
        lastChecked = true;
    } else {
        if (errorMsgLastPrinted == false) {
            var errorMsgLast = document.createElement("span");
            errorMsgLast.className = "error-message error-last";
            errorMsgLast.innerHTML = `${errorMessage}`;
            printError(lastInput, errorMsgLast);
            errorMsgLastPrinted = true;
        }
    }
}

// check email
function checkEmail(input) {
    var regex = eval(jsonObj.email['regex']);
    var errorMessage = jsonObj.email['errorMessage'];
    console.log(regex.test(String(input).toLowerCase()));
    if (regex.test(String(input).toLowerCase())) {
        if (errorMsgEmailPrinted == true) {
            console.log("1")
            document.querySelector(".error-email").remove();
            errorMsgEmailPrinted = false;
        }
        emailChecked = true;
    } else {
        if (errorMsgEmailPrinted == false) {
            var errorMsgEmail = document.createElement("span");
            errorMsgEmail.className = "error-message error-email";
            errorMsgEmail.innerHTML = `${errorMessage}`;
            printError(emailInput, errorMsgEmail);
            errorMsgEmailPrinted = true;
        }
    }
}

// print error messages
function printError(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// show all informations
function printInformations() {
    if (firstChecked) {
        console.log(JSON.stringify({ informations }));
        closeModal();
        validation.style.display = "flex";
    }
}

// close validation
validation.addEventListener('click', function () {
    validation.style.display = "none";
})


var jsonObj = {
    'first': {
        'id': '1',
        'value': '',
        'regex': '/^.{2,}$/',
        'errorMessage': 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
    }
    ,
    'last': {
        'id': '2',
        'value': '',
        'regex': '/^.{2,}$/',
        'errorMessage': 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
    }
    ,
    'email': {
        'id': '3',
        'value': '',
        'regex': '/^[^\s@]+@[^\s@]+\.[^\s@]+$/',
        'errorMessage': 'Veuillez entrer une adresse mail valide.',
    }
    ,
    'naissance': {
        'id': '4',
        'value': '',
        'regex': '',
        'errorMessage': 'Veuillez entrer une date de naissance.',
    }
    ,
    'tournois': {
        'id': '5',
        'value': '',
        'regex': '/^[0-9]*$/',
        'errorMessage': 'Veuillez entrer un nombre de tournois.',
    }
    ,
    'ville': {
        'id': '6',
        'value': '',
        'regex': '',
        'errorMessage': 'Veuillez choisir une ville.',
    }
    ,
    'conditions': {
        'id': '7',
        'value': '',
        'regex': '',
        'errorMessage': 'Vous devez vérifier que vous acceptez les termes et conditions.',
    }
    ,
    'newsletter': {
        'id': '8',
        'value': '',
        'regex': '',
        'errorMessage': '',
    }
};