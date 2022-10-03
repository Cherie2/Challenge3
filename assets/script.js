  //Variables to be used as options for possible password depending on chosen included characters
  var charsNum = ["0","1","2","3","4","5","6","7","8","9"];
  var charsLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var charsUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var charsSpecial = ["!","@","#","$","%","^","&","*","(",")"];
 
  var passwordCharsOptions = [
    charsNum, 
    charsLower, 
    charsUpper, 
    charsSpecial];
// Assignment Code
  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//variables to include the options for characters to be included in the password and its length
  var passwordLength = prompt("How long of a password would you like?");
  var includeCharsNum = confirm("Would you like Numeric Characacters included?");
  var includeCharsLower = confirm("Would you like Lowercase Characacters included?");
  var includeCharsUpper = confirm("Would you like Uppercase Characacters included?");
  var includeCharsSpecial = confirm("Would you like Special Characacters included?");

  var charsOptions = [
    passwordLength,
    includeCharsNum,
    includeCharsLower,
    includeCharsUpper,
    includeCharsSpecial,
  ];
//Password length requirements
   if(charsOptions[0]){
    input.minimumlength >= 8;
    maximumlength <= 128  
   }
     
  var password = [];
//Function used to randomize the selected types of characters for password
  function selectRandomChar(array){
    var randomNumber = Math.floor(Math.random() * array.Length);

    if(includeCharsNum){
      passwordCharsOptions = passwordCharsOptions.concat(charsNum)
      password.push(selectRandomChar(charsNum));
    }

    if(includeCharsLower){
      passwordCharsOptions = passwordCharsOptions.concat(charsLower)
      password.push(selectRandomChar(charsLower));
    }

     if(includeCharsUpper){
      passwordCharsOptions = passwordCharsOptions.concat(charsUpper)
      password.push(selectRandomChar(charsUpper));
    }

     if(includeCharsSpecial){
      passwordCharsOptions = passwordCharsOptions.concat(charsSpecial)
      password.push(selectRandomChar(charsSpecial));
    }  
    return array[randomNumber];
  
  }};
  writePassword();

  var password = generatePassword();
  
  var remainingChars = charsOptions.length - password.length
  var passwordText = document.querySelector("#password");
 
 for (var i = 0; i > remainingChars; i++) {
    var randomChar = selectRandomChar(passwordCharsOptions);
    password.push(randomChar);
    passwordText.value = password;
   // return(password);
  };



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
{alert(password)};

