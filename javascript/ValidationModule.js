function validateemail(email) {

    if(email.value.length==0)
    {
        document.getElementById('emailerror').style.display='block';
         document.getElementById('emailerror').innerHTML = "Email Required!!";
        email.style.border = "1px solid red";
        email.focus();
        return false;

    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      document.getElementById('emailerror').innerHTML = " ";
        return true;
    }
    else
    {
    document.getElementById('emailerror').style.display='block';
    document.getElementById('emailerror').innerHTML = "please enter valid email";
   email.style.border = "1px solid red";
    email.focus();

    return false;}
}

function validate() {
    var email = document.getElementById("emailAddr");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var gendervalue=document.getElementById("gender");

    if (validateemail(email) && validatefname(fname)&& validategender(gendervalue) && validatelname(lname) && validatepassword()) {

        return true;
    } else {
                validateemail(email);
                validatefname(fname);
                validatelname(lname);
                validategender(gendervalue);
                validatepassword();
        return false;
    }
}

function validatefname(name) {

    if(name.value.length==0){
         document.getElementById('fnameerror').style.display='block';
         document.getElementById('fnameerror').innerHTML = "FirstName Required!!";
        name.style.border = "1px solid red";
        name.focus();
        return false;
    }
    else if (/^[a-zA-Z ]{2,30}$/.test(name.value)) {
   
              document.getElementById('fnameerror').innerHTML = " ";
        return (true)
    }
    else
    {
    document.getElementById('fnameerror').style.display='block';
    document.getElementById('fnameerror').innerHTML = "please enter valid FirstName";
   name.style.border = "1px solid red";
    name.focus();


    return (false)
    }
}

function validatelname(name) {
     if(name.value.length==0){
         document.getElementById('lnameerror').style.display='block';
         document.getElementById('lnameerror').innerHTML = "LastName Required!!";
        name.style.border = "1px solid red";
        name.focus();
        return false;
    }
    else if (/^[a-zA-Z ]{2,30}$/.test(name.value)) {
       
        document.getElementById('lnameerror').innerHTML = " ";
        return (true)
    }
    else
    {
         document.getElementById('lnameerror').style.display='block';
    document.getElementById('lnameerror').innerHTML = "please enter valid LastName";
   name.style.border = "1px solid red";
    name.focus();
    return (false);

    }
   

    
}
function validategender(gendervalue) {
  
    if(gendervalue.value=='none')
    {       
         document.getElementById('gendererror').style.display='block';
         document.getElementById('gendererror').innerHTML = "Please Select Gender!!";
        gendervalue.style.border = "1px solid red";
        gendervalue.focus();
        return false;
    }
    else
    return true;
}

function validatepassword() {

    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
        if(pwd1.length==0||pwd2.length==0){
            
              document.getElementById('pwderror').style.display='block';
        var msg = document.getElementById("pwderror").innerHTML = "Password Required!!";
                
            return false;
        }
          else if (pwd1 != pwd2) {
             document.getElementById('pwderror').style.display='block';
        var msg = document.getElementById("pwderror").innerHTML = "password does not match";
        return (false);
         } else {
         

        return (true);
         }

}