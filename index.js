let emaill = document.getElementById("email_id");
let icon__error = document.getElementById("error-icon");
let text__error = document.getElementById("error_text");
let sucess_msg = document.getElementById("sucess_text");
let submit_btn = document.getElementById("submit-btn");
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const email_value = emaill.value;



submit_btn.addEventListener("click",validateEmail);

function validateEmail(){

   if(email_value.match(validRegex)){ 
   
     sucess_msg.style.display ="inline-block";
     sucess_msg.style.color = "green";
     sucess_msg.innerText = "Thank you for subsribing to our newsletter!";
   
     
   }

   else{
    icon__error.style.display ="inline-block";
    text__error.style.display = "inline-block";
   

   }

}