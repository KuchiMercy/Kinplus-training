//Navigation bar
let toggle = false;

const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

function openToggle(){
    if(!toggle){
        navMenu.classList.add('show');
        toggle = true;
    }
}

function closeToggle(){
    if(toggle){
        navMenu.classList.remove('show');
        toggle = false;
    }
}


// FORM POPUP
function openForm(){document.getElementById("myForm").style.display = "block";
}
function closeForm(){document.getElementById("myForm").style.display ="none";
}

// Email Validation
function validateEmail(){  
let x=document.myform.email.value;  
let atposition=x.indexOf("@");  
let dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
}  

