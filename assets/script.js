//Variables that include optional characters to be used for password
var charsNum = 1234567890;
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsSpecial = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

var password = [];
var isCharsNum, isCharsLower, isCharsUpper, isCharsSpecial;
var passwordLength;

//Window prompts/alerts/confirms after generate button is clicked, asking password length and which character types to include in password
function writePassword() {
passwordLength = window.prompt("How long of a password would you like? Please choose 8-128 characters");
//Password length requirements
 if(passwordLength >= 8 && passwordLength <= 128) {
   window.confirm("Your password is " + passwordLength + " characters long ")
 } else {
window.alert("Password length must be a minimum of 8 characters and maximum of 128 characters ")
return passwordLength
 }

isCharsNum = window.confirm("Would you like Numeric Characters included?");
 if(isCharsNum) {
  window.alert("Your password will include Numeric Characters")
 } else {
  window.alert("Your password will not include Numeric Characters")
 }

isCharsLower = window.confirm("Would you like Lowercase Characters included?");
 if(isCharsLower) {
  window.alert("Your password will include Lowercase Characters")
 } else {
  window.alert("Your password will not include Lowercase Characters")
 }

isCharsUpper = window.confirm("Would you like Uppercase Characters included?");
 if(isCharsUpper) {
  window.alert("Your password will include Uppercase Characters")
 } else {
  window.alert("Your password will not include uppercase Characters")
 }

isCharsSpecial = window.confirm("Would you like Special Characters included?");
 if(isCharsSpecial) {
  window.alert("Your password will include Special Characters")
 } else {
  window.alert("Your password will not include Special Characters")
 }

if((isCharsLower || isCharsNum || isCharsSpecial || isCharsUpper) && (passwordLength >=8 && passwordLength <= 128 )
) {
generatePassword();
} else {
window.alert ("Minimum requirements not met. Must choose at least one character type and password length must be 8-128 characters.")
}
};  

//Concats and sends selected character types to getPassword empty string
var generatePassword = function() {
  var getPassword = ""
  if(isCharsNum) {
    password += charsNum
  }
  if(isCharsLower) {
    password += charsLower
  }
  if(isCharsUpper) {
    password += charsUpper
  }
  if(isCharsSpecial) {
    password += charsSpecial
  }
//Randomizes the chosen character types for password 
  for( i=0; i < passwordLength; i++) {
    getPassword += password.charAt(Math.floor(Math.random() * password.length));
  }
// Write password to the #password input-Places password into text area box
  var passwordText = document.querySelector("#password");
  passwordText.value = getPassword;
}
//Added event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 

