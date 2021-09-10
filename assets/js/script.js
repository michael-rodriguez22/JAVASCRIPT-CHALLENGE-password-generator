// Assignment code here
function generatePassword() {
  // ask for length of password
  let passwordLength;
  
  function passwordLengthPrompt() {
    let input = window.prompt(
      "How many characters would you like your password to have? (input must be a whole number between 8 and 128)"
    );
    if (input.match(/[^0-9]/) || parseInt(input) < 8 || parseInt(input) > 128) {
      window.alert("Error: Invalid input. Please try again.");
      return passwordLengthPrompt();
    } else {
      passwordLength = parseInt(input);
      console.log(`password length: ${passwordLength}`);
    }
  }

  passwordLengthPrompt();
  // ask which characters will be used
  // return randomly generated password in accordance with user criteria
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
