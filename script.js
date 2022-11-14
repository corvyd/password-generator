var specialcharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","{","}","[","]","~","-","_","."] ;
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var UpperCase = ["A"] ;
var LowerCase = ["a"] ;

function getpasswordoptions() {
  var length = parseInt(
    prompt("how many characters would you like your password to contain?")
  );
  if(Number.isNaN(length)){
    alert("Password length must be a number");
    return null;
  }
  if(length<8 || length>128){
    alert("Password length must be between 8 and 128 characters")
  }
  var hasSpecial = confirm("click ok if you would like to include special characters in your password")
}



function generatePassword(){
  console.log("Hello")
  getpasswordoptions()
  return "Whats your password now?"

}











// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
