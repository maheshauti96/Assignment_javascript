
 function registeruser(event){
    event.preventDefault();
  if(validate())
  {
    // window.alert(" successfully validated");
    var newdata=getdata();
    window.alert("user "+newdata.Fname+" "+newdata.Lname+" registered successfully");
   
    localStorage.setItem(newdata.Email, JSON.stringify(newdata));
    window.location = "./homepage.html";

      return true;
  }
  else
  {
    window.alert("form is not valid");
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