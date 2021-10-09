// Assignment Code
var generateBtn = document.querySelector("#generate");
// Assigned all of the characters that will be combined to generate password.
//Uppercase letters
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
 "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Lowercase letters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//numbers characters
var number = [0,1,2,3,4,5,6,7,8,9];
//symbol characters
var symbol = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",
":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

//declared the variables I will use inside function lengthMet
var charLength;
var lowerEl;
var upperEl;
var numberEl;
var symbolEl;
//declared charSet which will use all of the comibined characters to choose from randomly.
var charSet = [];
//This function prompts the input from the user to make the password the length they would like.
function lengthMet(){
charLength = prompt("How many numbers would you like your password to be? *Minimum of 8 and maximum of 121"); 
if (charLength>121 || charLength<8){
  alert("Must enter between 8 and 121 characters")
 lengthMet()}};
 //calls the lenghtMet function
lengthMet();
// this functions confirms which types of characters they would like to include in their password.
 function selected(){
lowerEl = confirm("Would you like to include lower case characters?");
upperEl = confirm("Would you like to include upper case characters?");
numberEl = confirm("Would you like to include numeric characters?");
symbolEl = confirm("Would you like to include symbol characters?");
if((!lowerEl)&&(!upperEl)&&(!numberEl)&&(!symbolEl)){
  alert("Must select 1!")
selected()}};
//calls the selected function 
selected();
// combines the arrays to make the charSet if the characters are selected to use in password
 if(lowerEl){charSet = charSet.concat(lower)};
 if(upperEl){charSet = charSet.concat(upper)};
 if(numberEl){charSet = charSet.concat(number)};
 if(symbolEl){charSet = charSet.concat(symbol)};
 console.log(charSet);
 function getRand(arr){
//variable to pick a random character
   var rand = Math.floor(Math.random()*arr.length);
   return arr[rand]
  };

  //function used to generate the password
  function generatePassword() {
    var password = "";
    for (let i=0; i < charLength; i++) {

      password += getRand(charSet)
    };
     return password;
  };
  
  //function used to write the password so the user can see it.
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      
      passwordText.value = password;
      console.log(password);
    }
    
    
    generateBtn.addEventListener("click", writePassword);
    