let password = document.getElementById("password");
let img = document.getElementById("image");

img.addEventListener("click",function(){
    if(password.type =="password"){
        password.type="text";
        img.src="eye-open.png";        
    }else{
        password.type="password";
        img.src="eye-close.png"; 
    }
});