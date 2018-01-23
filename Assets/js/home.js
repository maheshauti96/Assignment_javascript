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
        window.alert("bclicked");
    return true;  // else
    // return false;
  
   
//     gender=document.getElementById("name").value;
//     address=document.getElementById("name").value;
//     return true;
 }

function validateemail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    email.style.color="green";
    return (true)
  }
  document.getElementById("emaillable").innerHTML="please enter valid email"; 
  email.style.color="red";
    return (false)
}
function validatefname(name){
    if(/^[a-zA-Z ]{2,30}$/.test(name.value))
    {
        name.style.color="green";
    return (true)
    }
    document.getElementById("firstname").innerHTML="invalid name"; 
    name.style.color="red";
      return (false)
}

function validatelname(name){
    if(/^[a-zA-Z ]{2,30}$/.test(name.value))
    {
        name.style.color="green";
    return (true)
    }
    document.getElementById("lastname").innerHTML="invalid name"; 
    name.style.backgroundColor="red";
      return (false)
}