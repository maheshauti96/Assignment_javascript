var obj;

function login(event) {

    event.preventDefault();

    var emailaddr = document.getElementById("emailAddr").value;
    var pwd = document.getElementById("pwd").value;
    var allEntries = getArray();
    var x = search(emailaddr, pwd, allEntries);
    if (x != null) {
        window.alert("welcome");

        window.location = './homepage.html';

    } else
        window.alert("invalid username and password");
}

function search(username, pwd, allEntries) {
    for (x = 0; x < allEntries.length; x++) {
        if ((username == allEntries[x].Email) && (pwd == allEntries[x].pwd))
            return x;
    }
    return null;
}