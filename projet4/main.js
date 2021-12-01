// DOM Elements
const closeButton = document.querySelector("#close-modal");
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const townInput = document.getElementById("town");
const conditionsInput = document.getElementById("checkbox1");
const conditionsLabel = document.getElementById("checkbox1Label");
const validation = document.getElementById("validation");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

// VAR
let data = [];
// MESSAGES D ERREUR AFFICHES OU NON
let errorMsgFirstPrinted = false;
let errorMsgLastPrinted = false;
let errorMsgEmailPrinted = false;
let errorMsgBirthdatePrinted = false;
let errorMsgQuantityPrinted = false;
let errorMsgTownPrinted = false;
let errorMsgConditionsPrinted = false;

// UN CHAMP A T IL UNE ERREUR
let noError = true;

// submit form
function validate(event) {
    event.preventDefault();

    // get all form data
    data = Object.fromEntries(new FormData(document.querySelector('form')).entries());

    checkFirst(data.first);
    checkLast(data.last);
    checkEmail(data.email);
    checkBirthdate(data.birthdate);
    checkQuantity(data.quantity);
    checkTown(location1, location2, location3, location4, location5, location6);
    checkConditions(conditionsInput);
    getData();
}

// check first
function checkFirst(input) {
    // RECUPERE REGEX ET MESSAGE ERREUR DU JSON
    let regex = eval(jsonObj.first['regex']);
    let errorMessage = jsonObj.first['errorMessage'];
    // NO ERROR
    if (regex.test(String(input).toLowerCase())) {
        if (errorMsgFirstPrinted) {
            document.querySelector(".error-first").remove();
            errorMsgFirstPrinted = false;
        }
    } else { //ERROR
        noError = false;
        if (!errorMsgFirstPrinted) { // affichage du message d'erreur si il n'est pas déjà affiché
            let errorMsgFirst = document.createElement("span");
            errorMsgFirst.className = "error-message error-first";
            errorMsgFirst.innerHTML = `${errorMessage}`;
            printError(firstInput, errorMsgFirst);
            errorMsgFirstPrinted = true;
        }
    }
}

// check last
function checkLast(input) {
    let regex = eval(jsonObj.last['regex']);
    let errorMessage = jsonObj.last['errorMessage'];
    if (regex.test(String(input).toLowerCase())) {
        if (errorMsgLastPrinted) {
            document.querySelector(".error-last").remove();
            errorMsgLastPrinted = false;
        }
    } else {
        noError = false;
        if (!errorMsgLastPrinted) { // affichage du message d'erreur si il n'est pas déjà affiché
            let errorMsgLast = document.createElement("span");
            errorMsgLast.className = "error-message error-last";
            errorMsgLast.innerHTML = `${errorMessage}`;
            printError(lastInput, errorMsgLast);
            errorMsgLastPrinted = true;
        }
    }
}

// check email
function checkEmail(input) {
    let regex = eval(jsonObj.email['regex']);
    let errorMessage = jsonObj.email['errorMessage'];
    if (regex.test(String(input).toLowerCase())) {
        if (errorMsgEmailPrinted) {
            document.querySelector(".error-email").remove();
            errorMsgEmailPrinted = false;
        }
    } else {
        noError = false;
        if (!errorMsgEmailPrinted) { // affichage du message d'erreur si il n'est pas déjà affiché
            let errorMsgEmail = document.createElement("span");
            errorMsgEmail.className = "error-message error-email";
            errorMsgEmail.innerHTML = `${errorMessage}`;
            printError(emailInput, errorMsgEmail);
            errorMsgEmailPrinted = true;
        }
    }
}

// check birthdate
function checkBirthdate(input) {
    let errorMessage = jsonObj.birthdate['errorMessage'];
    if (input.length === 0) {
        noError = false;
        if (!errorMsgBirthdatePrinted) { // affichage du message d'erreur si il n'est pas déjà affiché
            let errorMsgBirthdate = document.createElement("span");
            errorMsgBirthdate.className = "error-message error-birthdate";
            errorMsgBirthdate.innerHTML = `${errorMessage}`;
            printError(birthdateInput, errorMsgBirthdate);
            errorMsgBirthdatePrinted = true;
        }
    } else {
        if (errorMsgBirthdatePrinted) {
            document.querySelector(".error-birthdate").remove();
            errorMsgBirthdatePrinted = false;
        }
    }
}

// check quantity
function checkQuantity(input) {
    let regex = eval(jsonObj.quantity['regex']);
    let errorMessage = jsonObj.quantity['errorMessage'];
    if (regex.test(String(input).toLowerCase()) && input.length !== 0) {
        if (errorMsgQuantityPrinted) {
            document.querySelector(".error-quantity").remove();
            errorMsgQuantityPrinted = false;
        }
    } else {
        noError = false;
        if (!errorMsgQuantityPrinted) { // affichage du message d'erreur si il n'est pas déjà affiché
            let errorMsgQuantity = document.createElement("span");
            errorMsgQuantity.className = "error-message error-quantity";
            errorMsgQuantity.innerHTML = `${errorMessage}`;
            printError(quantityInput, errorMsgQuantity);
            errorMsgQuantityPrinted = true;
        }
    }
}

// check town

function checkTown(input1, input2, input3, input4, input5, input6) {
    let errorMessage = jsonObj.town['errorMessage'];
    if (input1.checked || input2.checked || input3.checked || input4.checked || input5.checked || input6.checked) {
        if (errorMsgTownPrinted) {
            document.querySelector(".error-town").remove();
            errorMsgTownPrinted = false;
        }
    } else {
        noError = false;
        if (!errorMsgTownPrinted) { // affichage du message d'erreur si il n'est pas déjà affiché
            let errorMsgTown = document.createElement("span");
            errorMsgTown.className = "error-message error-town";
            errorMsgTown.innerHTML = `${errorMessage}`;
            printError(townInput, errorMsgTown);
            errorMsgTownPrinted = true;
        }
    }
}

// check utilisation conditions
function checkConditions(input) {
    let errorMessage = jsonObj.conditions['errorMessage'];
    if (input.checked) {
        if (errorMsgConditionsPrinted) {
            document.querySelector(".error-conditions").remove();
            errorMsgConditionsPrinted = false;
        }
    } else {
        noError = false;
        if (!errorMsgConditionsPrinted) { // affichage du message d'erreur si il n'est pas déjà affiché
            let errorMsgConditions = document.createElement("span");
            errorMsgConditions.className = "error-message error-conditions";
            errorMsgConditions.innerHTML = `${errorMessage}`;
            printError(conditionsLabel, errorMsgConditions);
            errorMsgConditionsPrinted = true;
        }
    }
}

// print error messages
function printError(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// get all informations
function getData() {
    if (noError) {
        jsonObj.first.value = data.first;
        jsonObj.last.value = data.last;
        jsonObj.email.value = data.email;
        jsonObj.birthdate.value = data.birthdate;
        jsonObj.quantity.value = data.quantity;
        jsonObj.town.value = document.forms["reserve"]["location"].value;
        jsonObj.newsletter.value = checkbox2.checked;
        console.log([jsonObj.first.value, jsonObj.last.value, jsonObj.email.value, jsonObj.birthdate.value, jsonObj.quantity.value, jsonObj.town.value, jsonObj.newsletter.value])
        document.querySelector('form').reset();
        closeModal();
        validation.style.display = "flex";
    } else {
        noError = true;
    }
}

// close modal event
closeButton.addEventListener("click", closeModal);

// close validation message
validation.addEventListener('click', function () {
    validation.style.display = "none";
})

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}



let jsonObj = {
    'first': {
        'value': '',
        'regex': /^.{2,}$/,
        'errorMessage': 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
    }
    ,
    'last': {
        'value': '',
        'regex': /^.{2,}$/,
        'errorMessage': 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
    }
    ,
    'email': {
        'value': '',
        'regex': /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        'errorMessage': 'Veuillez entrer une adresse mail valide.',
    }
    ,
    'birthdate': {
        'value': '',
        'regex': '',
        'errorMessage': 'Veuillez entrer une date de naissance.',
    }
    ,
    'quantity': {
        'value': '',
        'regex': /^[0-9]*$/,
        'errorMessage': 'Veuillez entrer un nombre de tournois.',
    }
    ,
    'town': {
        'value': '',
        'regex': '',
        'errorMessage': 'Veuillez choisir une ville.',
    }
    ,
    'conditions': {
        'value': '',
        'regex': '',
        'errorMessage': 'Vous devez vérifier que vous acceptez les termes et conditions.',
    }
    ,
    'newsletter': {
        'value': '',
        'regex': '',
        'errorMessage': '',
    }
};