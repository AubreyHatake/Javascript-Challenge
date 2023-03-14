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
  var passwordLength = parseInt(prompt("How many Characters?"))
  if(isNaN(passwordLength)) {
    alert("Must choose a number");
    return null;
  
    // if the user does choose a number between 8 and 128 it will continue to show prompts to confirm what the user wants to include in the password.
    // user input will be stored as passwordLength
  } else if (!isNaN(passwordLength));{
    var specialCharacters = confirm("Do you want special characters?");
    var number = confirm("Do you want numbers?");
    var uppercases = confirm("Do you want uppercase?");
    var lowercases =  confirm("Do you want lowercase?");
    // This if statement is if the uses chooses ok for all the prompts.
    if (specialCharacters === true && number === true && uppercases === true && lowercases == true) {
      var answer = ("!2@aQo6s#$fg6345sr%65735^hf&*ASDGERXC)hSFGGFHG13465B");
      var password = answer; 
     }
     // All possibilities 
    // if the user wants both special characters and numbers, both will be included in the displayed password
    if (uppercases !== true && lowercases !== true ) {
      answer = ("029!@#$^4937@$%#@9482048!#^&^$892478436559%$%%&*&");
      password = answer; 
     }
    // // if the user wants uppercase and lowercase 
     if (specialCharacters !== true && numbers !== true) {
      answer = ("auSDFAdvnjdodnDASFKDFMNvniDAFDOJF");
     password = answer;
     }
    // if the user wants symbols and uppercase
    if (lowercases !== true, numbers !== true) {
      answer = ("SA@#$FSDVE$%@$#^#^%HFBFSYT%^WR@%^^&*()()OIYUJB")
      password = answer;
     }
     // if the user wants lowercase and numbers
     if (specialCharacters !== true, uppercase !== true) {
      answer = ("a89704923hfhbfqe98hf389ff90sim03840mfjej9f403")
      password = answer;
     }
     var pass = passwordLength;

     // a for loop to loop through the password length to get the users character value 
     for (let i = 8; i <= pass.length; ++i) {
    
  }
    }
    // // the return will display the generated password
    return (password);
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
