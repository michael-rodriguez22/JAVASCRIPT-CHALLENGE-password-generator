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
  const characterTypes = {};

  function characterTypesPrompt() {
    function check(type) {
      return window.confirm(
        `Would you like to include ${type}? Select 'OK' for yes or 'Cancel' for no.`
      );
    }
    characterTypes.uppercase = check("uppercase letters");
    characterTypes.lowercase = check("lowercase letters");
    characterTypes.numbers = check("numbers");
    characterTypes.specials = check("special characters");
    let valid;
    for (property in characterTypes) {
      if (characterTypes[property] === true) valid = true;
    }
    if (valid) {
      console.log("character types:");
      console.dir(characterTypes);
    } else {
      window.alert(
        "Error: No character types included. Please include at least one character type."
      );
      characterTypesPrompt();
    }
  }

  characterTypesPrompt();

  // return randomly generated password in accordance with user criteria
  let charactersString = "";
  let password = "";

  if (characterTypes.lowercase)
    charactersString += "abcdefghijklmnopqrstuvwxyz";
  if (characterTypes.uppercase)
    charactersString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (characterTypes.numbers) charactersString += "0123456789";
  if (characterTypes.specials) {
    charactersString += "' !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    charactersString += '"';
  }

  for (let i = 0; i < passwordLength; i++) {
    password += charactersString.charAt(
      Math.floor(Math.random() * charactersString.length)
    );
  }
  console.log(`password: ${password}`);
  console.log(
    "I hope you enjoyed this password generating experience! - Michael"
  );
  return password;
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
