
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
  
    localStorage.setItem('username',username);
    
    var allEntries = JSON.parse(localStorage.getItem('allEntries'));
    if(allEntries==undefined)
    allEntries=new Array();
    
    allEntries.push(newdata);
    localStorage.setItem("allEntries", JSON.stringify(allEntries));
    window.location = "./Assets/htmlPages/homepage.html";
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
