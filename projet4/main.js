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

    // get all form data
    const data = Object.fromEntries(new FormData(document.querySelector('form')).entries());
    console.log(data.first)

    checkName(data.first);
    // checkName(last);
    // checkEmail(email);
    // checkConditions(conditionsRadio);

    // if (last == "") {
    //     var errorMsgLast = document.createElement("span");
    //     errorMsgLast.className = "error-message";
    //     errorMsgLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    //     printError(lastInput, errorMsgLast);
    // }
    // if (email == "") {
    //     var errorMsgEmail = document.createElement("span");
    //     errorMsgEmail.className = "error-message";
    //     errorMsgEmail.innerHTML = "Veuillez entrer une adresse email valable.";
    //     printError(emailInput, errorMsgEmail);
    // }
    // else {
    //     closeModal();
    //     console.log(first);
    // }



}

// check email
// function checkEmail(input) {
//     const reMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     console.log(reMail.test(String(input).toLowerCase()))
// return reMail.test(String(input).toLowerCase());
// }

// check utilisation conditions
function checkConditions(radio) {
    console.log(radio.checked);
}

// check name
function checkName(input) {
    var reName = eval(jsonObj.first['regex']);

    if (reName.test(String(input).toLowerCase())) {

        if (errorMsgFirstPrinted == true) {
            document.querySelector(".error-first").remove();
            errorMsgFirstPrinted = false;
        }

        firstChecked = true;

        printInformations();
        
    } else {

        if (errorMsgFirstPrinted == false) {
            var errorMsgFirst = document.createElement("span");
            errorMsgFirst.className = "error-message error-first";
            errorMsgFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
            printError(firstInput, errorMsgFirst);
            errorMsgFirstPrinted = true;
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
    },
    'last': {
        'id': '2',
        'value': '',
        'regex': '/^.{2,}$/',
        'errorMessage': 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
    }
    ,
    'email': {
        'id': '3',
        'value': '',
        'regex': '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
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

// console.log(jsonObj.first['regex'])
