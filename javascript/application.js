
function validateemail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    email.style.color="green";
    return true;
  }
  document.getElementById("emaillable").innerHTML="please enter valid email"; 
  email.style.color="red";
 
    return false;
}

