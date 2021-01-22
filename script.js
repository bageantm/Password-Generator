// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&","*","(",")","`","~","/","?"];
function generatePassword() {
  // PROMPT for password length
  var passwordLength = prompt("Enter a password length. Password must be no less than 8 and no more than 128 characters.");
  if (passwordLength === null) {
    return "";
  }
    else if (passwordLength <8 || passwordLength >128) {
       alert("Password is restricted to character lengths between 8 and 128. Password character length allowances are inclusive of 8 and 128.");
     }
    
  var password = "";
  var characters = [];

  
  // CONFIRM IF they want numbers, then add numbers to a conjoined list
  if (confirm("Should your password contain numbers?")) {
    console.log("password contains numbers");
    characters = characters.concat(numbers);
  }
  // CONFIRM IF they want lowercase, then add lowercase to a conjoined list
  if (confirm("Should your password contain lowercase characters?")) {
    console.log("password contains lowercase");
    characters = characters.concat(lowercase);
  }
  // CONFIRM IF they want uppercase, then add uppercase to a conjoined list
  if (confirm("Should your password contain uppercase characters?")) {
    console.log("password contains uppercase");
    characters = characters.concat(uppercase);
  }
  // CONFIRM IF they want special, then add special to a conjoined list
  if (confirm("Should your password contain special characters?")) {
    console.log("password contains special");
    characters = characters.concat(special);
  }
  // Loop and add new random characters from the `characters` list until `password.length` < length;
  for (var i=0; i<passwordLength; i++) {
    password += characters[Math.floor(Math.random()*characters.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
