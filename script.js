// the variables here will be included in the displayed password depending on what the user wants to include.
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"; 
var symbols = "!@#$%^&*_-+=";

var options = [lowercase, uppercase, numbers, symbols];

// The password will be generated in this function here,
function generatePassword () {
  // in case the user does not choose a length, it will return the page and display the alert, Must choose a number.
  var length = parseInt(prompt("How many Characters?"))
  if(isNaN(length)) {
    alert("Must choose a number");
    return null;
    // if the user does choose a number between 8 and 128 it will continue to show prompts to confirm what the user wants to include in the password
  }  else if (!isNaN(length = 8 < 128));{
    var specialCharacters = confirm("Do you want special characters?");
    var number = confirm("Do you want numbers?");
    var uppercases = confirm("Do you want uppercase?");
    var lowercases =  confirm("Do you want lowercase?");
    // if the user chooses special characters, the password will include symbols
    if (specialCharacters === true) {
      var password = (symbols.length);
    }
    // if the user wants both special characters and numbers, both will be included in the displayed password
    if (number, specialCharacters === true) {
      password = (symbols + numbers.length);
    }
    // if the user wants uppercase, special characters, and numbers, the displayed password will include all.
    if (uppercases, specialCharacters, numbers === true) {
      password = (symbols + numbers + uppercase.length);
    }
    // if the user wants lowercases, special characters, numbers, and uppercases includes it will be in the displayed password at their desired length.
    if (lowercases, specialCharacters, numbers, uppercases === true) {
      password = (symbols + numbers + uppercase + lowercase.length);
    }
    // the return will display the generated password
    return password;
  }
} 



// this function will assist with the number portion of the password to ensure the password is randomized.
function getRandom (x) {
  var randomizer = Math.floor(Math.random() * x.length);
  var randEl = x[randomizer]
  return randEl;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
