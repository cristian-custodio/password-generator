let passwordLength;
let specialCharacters;
let lowerCase;
let upperCase;
let numeric;

function generateButton() {
  getUserOptions();

  generatePassword(
    passwordLength,
    specialCharacters,
    lowerCase,
    upperCase,
    numeric
  );

  //Generate password and display on screen

  console.log("Hello World!");
}

function generatePassword(
  passwordLength,
  specialCharacters,
  lowerCase,
  upperCase,
  numeric
) {
  let finalPassword = "";

  if (
    specialCharacters == false &&
    lowerCase == false &&
    upperCase == false &&
    numeric == false
  )
    return alert("At least one character type must be selected ");

  if (specialCharacters === true) {
    for (let i = 0; i < passwordLength; i++) {
      let specialCharactersTemp =
        specialCharactersArray[
          Math.floor(Math.random() * specialCharactersArray.length)
        ];
      finalPassword += specialCharactersTemp;
    }
  }
  if (lowerCase === true) {
    for (let i = 0; i < passwordLength; i++) {
      let lowerCaseCharacterTemp =
        lowerCasedCharactersArray[
          Math.floor(Math.random() * lowerCasedCharactersArray.length)
        ];
      finalPassword += lowerCaseCharacterTemp;
    }
  }

  if (upperCase === true) {
    for (let i = 0; i < passwordLength; i++) {
      let uppperCaseCharacterTemp =
        upperCasedCharactersArray[
          Math.floor(Math.random() * upperCasedCharactersArray.length)
        ];
      finalPassword += uppperCaseCharacterTemp;
    }
  }

  if (numeric === true) {
    for (let i = 0; i < passwordLength; i++) {
      let numericCharactersTemp =
        numericCharactersArray[
          Math.floor(Math.random() * numericCharactersArray.length)
        ];
      finalPassword += numericCharactersTemp;
    }
  }

  //Shuffle our Array using the Durstenfeld Shuffle
  let passwordArray = finalPassword.split("");
  shuffleArray(passwordArray);
  let generatedPassword = passwordArray.slice(0, passwordLength).join("");

  //Place array in html
  let passwordField = document.getElementById("passwordField");
  passwordField.innerHTML = generatedPassword;
}

function getUserOptions() {
  //Ask the user for the lenght of the password
  //Check if the length is between 8 and 128 chacaters
  passwordLength = prompt(
    "How many characters? Please enter a number between 8-128."
  );

  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Password Length Must be between 8-128 characters!");
  }

  //Ask the user if they would like special characters in the password
  specialCharacters = confirm("Would you like special characters?");

  //Ask the user if they would like lowercase
  lowerCase = confirm("Would you like lowercase characters?");

  //Ask the user if they would like uppercase
  upperCase = confirm("Would you like uppercase characters?");

  //Ask the user if they would like numeric
  numeric = confirm("Would you like to include numbers?");
}

// Array of special characters to be included in password
let specialCharactersArray = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of lowercase characters to be included in password
var lowerCasedCharactersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharactersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Array of numeric characters to be included in password
var numericCharactersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
