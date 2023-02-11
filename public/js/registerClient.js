//store the username and password input forms as variables
const username=document.getElementById("username")
const password=document.getElementById("password")

//store the error message paragraph as a variable
const error=document.getElementById("error")
document.addEventListener("DOMContentLoaded",alert("here"))
function isAlphaNumeric(str) {
    let code=0
    for (let i = 0;i < str.length; i++) {
      code = str.charCodeAt(i) //this finds the ascii code of a character within the string str at the index i 
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // uppercase alpha (A-Z)
          !(code > 96 && code < 123)) { // lowercase alpha (a-z)
        return false;
      }
    }
    return true;
};

function hasNumber(str){
    let code=0
    for(let i=0;i<str.length;i++){
        code=str.charCodeAt(i)//same as above
        if(code > 47 && code < 58){ //checks if the character is numeric 0-9
            return true //only one numeric character needed to return true
        }
    }
    return false
}
function hasLetter(str){
    let code=0
    for(let i=0;i<str.length;i++){
        code=str.charCodeAt(i)//same as above
        console.log(str[i],code)
        if((code > 64 && code < 91) || //uppercase alpha (A-Z)
            (code > 96 && code < 123)){ //lowercase alpha (a-z)
            return true //only one letter needed to return true
        }
    }
    return false
}

//this function will validate the username and password, returns true if valid and false if not valid
function validate(){
    let name=username.value
    let pass=password.value
    alert("validating")
    //check if username longer than 20 characters and password less than 12 characters
    if (name.length>20){
        error.innerText="Maximum Username length is 20 characters"
        return false
    }
    
    if (pass.length<12){
        error.innerText="Password must be at least 12 characters long"
        return false
    }
    //check if username is not alphanumeric
    if(isAlphaNumeric(name)==false){
        error.innerText="Username must only have letters and numbers"
        return false
    }
    
    //check if password is alphanumeric or doesn't have any letters or doesn't any have numbers
    console.log(hasLetter(pass))
    if(isAlphaNumeric(pass)==true || hasLetter(pass)==false || hasNumber(pass)==false){
        error.innerText="Password must have at least 1 letter, 1 symbol and 1 number"
        return false
    }
    alert("valid username and password")
    
}

