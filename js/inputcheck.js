const error = document.getElementsByClassName("error");
const email = document.getElementById("email");
const passw = document.getElementById("password");

//Validate Email

email.onblur = function() {validateEmail(email.value)};
email.onfocus = function() {
    hideError(0)
};

function validateEmail(emailInput){
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!emailInput.match(emailformat)) {
        changeErrorStyle(0);
        return false;
    }
    return true;
};
//  Validate Password

password.onblur = function() { validatePassword (password.value)}
password.onfocus = function () {
    hideError(1)
}
function validatePassword(passwordInput) {
    var passwordformat = /[a-z]+ [0-9]/
    if (!passwordInput.match(passwordformat)) {
        changeErrorStyle(1);
        return false
    }
    return true;
}

//Funcion general de Errores

function changeErrorStyle(index) {
    error[index].style.display = 'unset';  
 };
function hideError(index) {
     error[index].style.display = 'none'
 };