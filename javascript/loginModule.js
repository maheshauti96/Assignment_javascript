var obj;

function login(event) {

    event.preventDefault();
     var email = document.getElementById("emailAddr");
     if(validateemail(email))
       {

 
    var emailaddr = document.getElementById("emailAddr").value;
    var pwd = document.getElementById("pwd").value;
    var allEntries = getArray();
    var x = search(emailaddr, pwd, allEntries);
    if (x != null) {
        window.alert("welcome");
        setUser(emailaddr);
        window.location = './homepage.html';

    } else
    {   
        document.getElementById('loginerror').style.display="block";
        document.getElementById('loginerror').innerHTML="invalid Credentials";
        return false;
        }

       }
       return false;

   
}

function search(username, pwd, allEntries) {
    for (x = 0; x < allEntries.length; x++) {
        if ((username == allEntries[x].Email) && (pwd == allEntries[x].pwd))
            return x;
    }
    return null;
}