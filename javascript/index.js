
var username;
//  local variables

 function registeruser(event){
    event.preventDefault();
  if(validate())
  {
    // window.alert(" successfully validated");
    var newdata=getdata();
    window.alert("user "+newdata.Fname+" "+newdata.Lname+" registered successfully");
    username=newdata.Email;
    localStorage.setItem(newdata.Email, JSON.stringify(newdata));
    localStorage.setItem('username',username);
    var allEntries = JSON.parse(localStorage.getItem('allEntries'));
    allEntries.push(newdata);
    localStorage.setItem("allEntries", JSON.stringify(allEntries));
    window.location = "./homepage.html";
    return true;
  }
  else
  {
    window.alert("form is incomplete");
  return false;
  }
 }

 function user(Fname,Lname,Email,Address,imgurl,pwd,gender) {
    this.Fname = Fname;
    this.Lname = Lname;
    this.Email = Email;
    this.Address = Address;
    this.imgurl = imgurl;
    this.pwd = pwd;
    this.gender = gender;
}

   function getdata(){
       var Fname=document.getElementById("fname").value;
       var Lname=document.getElementById("lname").value;
       var Email=document.getElementById("emailAddr").value;
       var Address=document.getElementById("address").value;
       var imgurl=document.getElementById("img").value;
       var pwd=document.getElementById("pwd1").value;
       var gender=document.getElementById("gender").value;
        var new1=new user(Fname,Lname,Email,Address,imgurl,pwd,gender);
       return new1;
   }
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

