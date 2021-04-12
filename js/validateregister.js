const fullname = document.getElementById('fullname');
const nerror = document.getElementsByClassName ("nerror")
const email = document.getElementById("email");
const passw = document.getElementById("password");

//Validate Name
fullname.onblur = function() {validateName(fullname.value)};
fullname.onfocus = function() {hideError(0)};

function validateName(fullnameInput){
  var fullnameFormat = /[A-Za-z ].{6,}/;
  if (!fullname.match(fullnameFormat)) {
    changeErrorStyle(0);
    return false;
  }
  return true;
};
// fullname.onblur = function () { validetFullName(fullname.value)} ;
// fullname.onfocus = function () { 
//     hideError(0)
// }
// function validateFullName(fullnameInput){
//     var fnameformat = /[A-Za-z ]+ [6,]/;
//     if (!fullnameInput.match(fnameformat)) {
//         changeErrorStyle(0);
//         return false;
//     }
//     return true;
// }

//Validate Email

email.onblur = function() {validateEmail(email.value)};
email.onfocus = function() {
    hideError(1)
};

function validateEmail(emailInput){
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!emailInput.match(emailformat)) {
        changeErrorStyle(1);
        return false;
    }
    return true;
};
function changeErrorStyle(index) {
    error[index].style.display = 'unset';  
    };
function hideError(index) {
        error[index].style.display = 'none'
    };