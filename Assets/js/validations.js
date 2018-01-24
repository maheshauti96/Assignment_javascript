
function validate(){
    var email=document.getElementById("emailAddr");
    var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
   
    if(validateemail(email) && validatefname(fname) && validatelname(lname)&& validatepassword())
    {
       
    return true;
    }
    else
    {
       
    return false;
    }
}

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
    name.style.color="red";
  
      return (false)
}
function validatepassword(){
    var pwd1= document.getElementById("pwd1").value;
    var pwd2= document.getElementById("pwd2").value;
    
    if(pwd1==pwd2)
    {     
       
      
        return(true);
    }
    else
    {    
        var msg= document.getElementById("msg").innerHTML="password does not match";
      
        return(false);
    }

}
