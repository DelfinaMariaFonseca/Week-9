let errorArray = [];
let hidden = document.getElementsByClassName("hidden");

function formCheck() {
    let elements = ["email", "passw", "buttons"];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (!document.getElementById(element)) {
            errorArray.push("Element " + element + " does not exists");
            hidden.append("Element " + element + " does not exists");
            console.log(errorArray);
        }
    }
    function checkLabelEmail() {
        const labelEmail = document.querySelector(['label[for="email"]']);
        if(!labelEmail) {
            errorsArray.push('Email label is missing');
        }
    };
    
    function checkInputEmail() {
        const inputEmail = document.querySelector(['input[type="email"][name=email][required]']);
        if(!inputEmail) {
            errorsArray.push('E-mail input is missing or incorrect');
        }
    };
    
    function checkLabelPassword() {
        const labelPassword = document.querySelector(['label[for="password"]']);
        if(!labelPassword) {
            errorsArray.push('Password label is missing');
        }
    };
    
    function checkInputPassword() {
        const inputPassword = document.querySelector(['input[type="password"][name="passw"][required]']);
        if(!inputPassword) {
            errorArray.push('Password input is missing or incorrect');
        }
    };
    
    function checkLoginButton() {
        const loginButton = document.querySelector(['button[type="submit"]']);
        if(!loginButton) {
            errorsArray.push('Missing submit button');
        }
    };
function check(){
    const ValidationsResults = document.getElementsByClassName("validationContent");
    if(errorArray.length === 0) {
        ValidationsResults.innerHTML += '<p>Every validation has passed</p>';
    } else {
        for (let i = 0; i < errorArray.length; i++) {
            console.log(errorArray[i]);
            ValidationsResults.innerHTML += '<p>' + errorArray[i] + '</p>';
        }
