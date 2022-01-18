// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
// Calls the ID
  var passwordText = document.querySelector("#password");
  //Calls function below
  var password = generatePassword();
  
  passwordText.value = password;

}

function generatePassword() {
  //Choose length of characters
    var passwordLength = window.prompt("Enter a character length between 8 and 128.");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You did not enter a correct length. Please try again.");
      return generatePassword();
      }
// Ask if special characters are needed
   var characterType = window.confirm("Would you want special characters?");
   if (characterType === true) {
     var characterType = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
   }
   else
   {
    var characterType = "";

   }

//Ask about lowercase
  var lowerCasePW = window.confirm("Do you want include lowercase character(s)?");
  if (lowerCasePW===true) {
    var lowerCasePW = "abcdefghijklmnopqrstuvwxyz";
  }

  else {
    var lowerCasePW = "";
  }

  //Ask about uppercase
  var upperCasePW = window.confirm("Do you want to include Uppercase character(s)?");
  if (upperCasePW===true) {
    var upperCasePW = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  else {
    var upperCasePW = "";
    console.log(upperCasePW);
  }

  //Ask about numbers
  var numericType = window.confirm("Do you want to include number(s)?");

  if (numericType===true) {
    var numericType = "1234567890";
  }
  else{
    var numericType = "";

  }
  
  //combines all characters that user wants to include
  var combinedCharacters = characterType + numericType + lowerCasePW + upperCasePW;

passwordFinal = "";
  for (var i=0; i < passwordLength; i++) {

    passwordFinal = passwordFinal + combinedCharacters[Math.floor(Math.random() * Math.floor(combinedCharacters.length-1))];
}
return passwordFinal;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
