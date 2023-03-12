var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"; 
var symbols = "!@#$%^&*_-+=";

var options = [lowercase, uppercase, numbers, symbols];


function generatePassword () {
  var length = parseInt(prompt("How many Characters?"))
  if(isNaN(length)) {
    alert("Must choose a number");
   }  else { (!isNaN(length));
      alert(length);
    }

     return null;
  }



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
