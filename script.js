// Assignment code here
// I need variables here
// var alphabetNumericCharacters = ('abcdefghijklmnopqrstuvwxyz0123456789');
// var passwordCharacters = ("~!@#$%^&*()_+");
// can I use math random instead of making a variable for numbers?
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789"; 
const symbols = "!@#$%^&*_-+=";

var options = [lowercase, uppercase, numbers, symbols];
var index = Math.floor(Math.random() * options.length);
var generatePassword = document.querySelector("#Password")
var writePassword = function() { 

var userChoice = window.prompt("How many characters?")
if (userChoice > 1) {
window.prompts(generatePassword + index);

// }  else if {
//   (numbers) 
//     window.alert(numbers)

  }

 }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var generatePassword = document.querySelector("#generate");
// document.getElementById("generate-password").addEventListener("click", e => {
//   e.preventDefault();


// Write password to the #password input
// var writePassword = function() {
  
 
//   passwordText.value = password;

// }

// I need a button, I also need to create prompts and responses that will give me an output.

// function generatePassword() {
//   var prompt = ("How many characters?")
//   console.log(response) + (password.length) ; (writePassword)
  
// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
