
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
   function loadprofile(){
       username=localStorage.getItem('username');
       
       var obj = JSON.parse(localStorage.getItem(username));
       document.getElementById("PR_EMAIL").value=obj.Email;
       document.getElementById("PR_FN").value=obj.Fname;
       document.getElementById("PR_LN").value=obj.Lname;
       document.getElementById("PR_GENDER").value=obj.gender;
       document.getElementById("PR_ADDRESS").value=obj.Address;
       document.getElementById("PR_IMAGE").value=obj.imgurl;
      
     
       
       
       
   }
   function makeeditable(){
    document.getElementById("PR_EMAIL").readOnly=false;
    document.getElementById("PR_FN").readOnly=false;
    document.getElementById("PR_LN").readOnly=false;
    document.getElementById("PR_GENDER").readOnly=false;
    document.getElementById("PR_ADDRESS").readOnly=false;
    document.getElementById("PR_IMAGE").readOnly=false;
    

    var para = document.createElement("input");
    para.setAttribute("type", "file");
    para.setAttribute("style", "display: block;");
    var element = document.getElementById("PR_IMAGE");
    element.appendChild(para);
    
   }