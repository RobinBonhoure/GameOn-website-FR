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
var data = [];

// VAR
// var first;
// var last;
// var email;
var errorMsgFirstPrinted = false;
var errorMsgLastPrinted = false;
var errorMsgEmailPrinted = false;
var errorMsgBirthdatePrinted = false;
var errorMsgQuantityPrinted = false;
var errorMsgTownPrinted = false;
var errorMsgConditionsPrinted = false;
var informations = [];
var firstChecked = false;
var lastChecked = false;
var emailChecked = false;
var birthdateChecked = false;
var quantityChecked = false;
var townChecked = false;
var conditionsChecked = false;

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

// check birthdate
function checkBirthdate(input) {
    var errorMessage = jsonObj.birthdate['errorMessage'];
    if (input.length === 0) {
        if (errorMsgBirthdatePrinted == false) {
            var errorMsgBirthdate = document.createElement("span");
            errorMsgBirthdate.className = "error-message error-birthdate";
            errorMsgBirthdate.innerHTML = `${errorMessage}`;
            printError(birthdateInput, errorMsgBirthdate);
            errorMsgBirthdatePrinted = true;
        }
    } else {
        if (errorMsgBirthdatePrinted == true) {
            document.querySelector(".error-birthdate").remove();
            errorMsgBirthdatePrinted = false;
        }
        birthdateChecked = true;
    }
}

// check quantity
function checkQuantity(input) {
    var regex = eval(jsonObj.quantity['regex']);
    var errorMessage = jsonObj.quantity['errorMessage'];
    console.log(regex.test(String(input).toLowerCase()));
    if (regex.test(String(input).toLowerCase()) && input.length !== 0) {
        if (errorMsgQuantityPrinted == true) {
            document.querySelector(".error-quantity").remove();
            errorMsgQuantityPrinted = false;
        }
        quantityChecked = true;
    } else {
        if (errorMsgQuantityPrinted == false) {
            var errorMsgQuantity = document.createElement("span");
            errorMsgQuantity.className = "error-message error-quantity";
            errorMsgQuantity.innerHTML = `${errorMessage}`;
            printError(quantityInput, errorMsgQuantity);
            errorMsgQuantityPrinted = true;
        }
    }
}

// check town

function checkTown(input1, input2, input3, input4, input5, input6) {
    var errorMessage = jsonObj.town['errorMessage'];
    if (input1.checked || input2.checked || input3.checked || input4.checked || input5.checked || input6.checked) {
        if (errorMsgTownPrinted == true) {
            document.querySelector(".error-town").remove();
            errorMsgTownPrinted = false;
        }
        townChecked = true;
    } else {
        if (errorMsgTownPrinted == false) {
            var errorMsgTown = document.createElement("span");
            errorMsgTown.className = "error-message error-town";
            errorMsgTown.innerHTML = `${errorMessage}`;
            printError(townInput, errorMsgTown);
            errorMsgTownPrinted = true;
        }
    }
}

// check utilisation conditions
function checkConditions(input) {
    var errorMessage = jsonObj.conditions['errorMessage'];
    if (input.checked) {
        if (errorMsgConditionsPrinted == true) {
            document.querySelector(".error-conditions").remove();
            errorMsgConditionsPrinted = false;
        }
        conditionsChecked = true;
    } else {
        if (errorMsgConditionsPrinted == false) {
            var errorMsgConditions = document.createElement("span");
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
    if (firstChecked && lastChecked && emailChecked && birthdateChecked && quantityChecked && townChecked && conditionsChecked) {
        
        console.log([data.first, data.last, data.email, data.birthdate, data.quantity, document.forms["reserve"]["location"].value, checkbox2.checked]);

        document.querySelector('form').reset();

        closeModal();
        validation.style.display = "flex";
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
    'birthdate': {
        'id': '4',
        'value': '',
        'regex': '',
        'errorMessage': 'Veuillez entrer une date de naissance.',
    }
    ,
    'quantity': {
        'id': '5',
        'value': '',
        'regex': '/^[0-9]*$/',
        'errorMessage': 'Veuillez entrer un nombre de tournois.',
    }
    ,
    'town': {
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