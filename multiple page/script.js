let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};
signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};
loginshow.onclick = function () {
  document.getElementById("showlogin").classList.toggle("active");
};

// validation

function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
      item.innerHTML = "";
  }
  
  }

function seterror(id, error){
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
  
}

function validateform(){
  var returnval= true;
  clearErrors();
  var name= document.forms['myForm']["fname"].value;
  if(name<5){
   seterror("nameField","*Name is too short")
   returnval = false;
  }

  var password = document.forms['myForm']["fpass"].value;
  if (password.length < 6){
      seterror("pass", "*Password should be atleast 6 characters long!");
      returnval = false;
  }
  return returnval;
}











