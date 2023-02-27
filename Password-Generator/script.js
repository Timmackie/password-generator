// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength=parseInt(window.prompt("Enter desired password length."))
if(passwordLength===null || isNaN(passwordLength)){
  alert("Must enter a valid password length.")
  return "please try again"
}
  console.log(passwordLength)
 if (passwordLength < 8){
  return false
 }
 if (passwordLength > 128){
  return false
 }
  var yesLower=confirm("Would you like lowercase letters?")
  var characterstring=""
  if(yesLower){
    characterstring=characterstring.concat("abcdefghijklmnopqrstuvwxyz")
  }
  if(confirm("Would you like uppercase letters?")){
   characterstring +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(confirm("Would you like numbers?")){
    characterstring +="0123456789"
  }
  if(confirm("Would you like special characters?")){
    characterstring +="!%@*&"
  }
  if(characterstring.length===0){
    alert("Must select one character type.");
    return "Please try again.";
  }
  var chararray=characterstring.split("")
  var passstring=""
  for(var i=0;i<passwordLength;i++){
    var index=Math.floor(Math.random()*chararray.length)
    var digit=chararray[index]
passstring +=digit
  }
  return passstring
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);