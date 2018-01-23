function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// document.getElementById("submit").addEventListener("click", registeruser); 

 function registeruser(){
//     var first,last,email,gender, address,image;
//     first=document.getElementById("fname").value;
//     last=document.getElementById("lname").value;
//   email=document.getElementById("emailAddr").value; 
//     if(validateemail(email))
    return true;  // else
    // return false;
  
   
//     gender=document.getElementById("name").value;
//     address=document.getElementById("name").value;
//     return true;
 }

function validateemail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
  document.getElementById("emaillable").innerHTML="please enter valid email"; 
  document.getElementById("emaillable").style.color="red";
  document.getElementById("emailAddr").focus(); 
    return (false)
}