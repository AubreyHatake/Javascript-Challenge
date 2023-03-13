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
    return null;
   }  else if (!isNaN(length, 8 < 128));{
      var specialCharacters = confirm("Do you want special characters?");
      var number = confirm("Do you want numbers?");
      var uppercases = confirm("Do you want uppercase?");
      var lowercases =  confirm("Do you want lowercase?");
  //  } else { (specialCharacters === True);
  //   console.log(symbols); 
  //   (number === true);
  //   console.log(numbers);
  //   (uppercases === true);
  //   console.log(uppercase);
  //   (lowercases === true);
  //   console.log(lowercases);


   } }

  



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
