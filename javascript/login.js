function validateusername(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    email.style.color="green";
    return true;
  }
  document.getElementById("emaillable").innerHTML="please enter valid email"; 
  email.style.color="red";
 
    return false;
}
var obj;
function login(event){
   
    event.preventDefault();

    var emailaddr=document.getElementById("emailAddr").value;
    var pwd=document.getElementById("pwd").value;
    var allEntries = JSON.parse(localStorage.getItem('allEntries'));
    var x = search(emailaddr, allEntries);
    if(x!=null){
        window.alert("welcome");
        localStorage.setItem('username',emailaddr);
        window.location = './homepage.html';

    }
    else
    window.alert("please register first");
}
function search(username,allEntries){
    for (x=0; x<allEntries.length; x++){
        if(username==allEntries[x].Email)
            return x;    
       }
       return null;
   }